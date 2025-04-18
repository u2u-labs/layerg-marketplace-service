import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { GraphQLClient } from 'graphql-request';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { validate as isValidUUID } from 'uuid';

import {
  projectSelect,
  userFollow,
  userSelectFull,
} from '../../commons/definitions/Constraint.Object';
import { GetTransferNftQueryVariables, getSdk } from '../../generated/graphql';
import { findProjectsUserSubscribe } from '../launchpad/dto/find-project.dto';
import { ActivityService } from '../nft/activity.service';
import {
  GetActivityUserDto,
  GetFollowingDto,
  GetListBid,
} from './dto/activity-user.dto';
import { GetAllUser } from './dto/get-all-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SendVerifyEmailDto, VerifyEmailDto } from './dto/verify-email.dto';
import { ListProjectEntity } from './entities/project.entity';

import PaginationCommon from '@/apps/api/src/app/commons/HasNext.common';
import MetricCommon from '@/apps/api/src/app/commons/Metric.common';
import {
  MetricCategory,
  TypeCategory,
} from '@/apps/api/src/app/constants/enums/Metric.enum';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
interface UserRedisinterface {
  timestamp: string;
  email: string;
  userId: string;
  verifyToken: string;
}

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private activetiService: ActivityService,
    private redisisService: RedisService,
  ) {}

  private readonly secretKeyConfirm = process.env.MAIL_KEY_CONFIRM;
  private readonly tokenExpirationTime = 60;
  private readonly redisExpirationTime = 60;
  private readonly endpoint = process.env.SUBGRAPH_URL;
  private client = this.getGraphqlClient();

  private getGraphqlClient() {
    return new GraphQLClient(this.endpoint);
  }

  // Remove few prop secret
  private minifyUserObject(params: any): any {
    const { user = {} } = params;
    const propertiesToRemove = ['signature', 'signer', 'signedMessage', 'user'];
    const minifiedUser = {
      ...params,
      isFollowed: user && user.length > 0 ? user[0].isFollow : false,
    };
    for (const property in minifiedUser) {
      if (propertiesToRemove.includes(property)) {
        delete minifiedUser[property];
      }
    }
    return minifiedUser;
  }

  async findByPublicKey(publicKey: string): Promise<any> {
    const account = await this.prisma.user.findFirst({
      where: {
        publicKey: publicKey,
      },
    });
    if (!account) {
      return null;
    }
    return account;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async findOneByWallet(address: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        signer: address.toLowerCase(),
      },
    });
    if (!user) {
      throw new NotFoundException(`User #${address} not found`);
    }
    return user;
  }

  async findAll(
    filter: GetAllUser,
    currentUser: User,
  ): Promise<PagingResponseHasNext<any>> {
    const currentUserId = currentUser?.id;
    // const limit = (filter.limit || 12) as number;
    // const cursor = filter.cursor;
    // const take: number = limit && limit > 0 ? parseInt(limit) + 1 : 13;
    const whereCondition: Prisma.UserWhereInput = {
      ...(filter.search
        ? {
            OR: [
              {
                username: {
                  contains: filter.search,
                  mode: 'insensitive',
                },
              },
              {
                email: {
                  contains: filter.search,
                  mode: 'insensitive',
                },
              },
              {
                signer: {
                  contains: filter.search,
                  mode: 'insensitive',
                },
              },
              {
                shortLink: {
                  contains: filter.search,
                  mode: 'insensitive',
                },
              },
              // Add more fields as needed
            ],
          }
        : {}),
      username: {
        not: null,
      },
      isActive: true,
    };
    const usersWithFollowStatus = await this.prisma.user.findMany({
      orderBy: [
        {
          metricPoint: 'desc',
        },
        {
          createdAt: filter.order,
        },
      ],
      where: whereCondition,
      skip: (filter.page - 1) * filter.limit,
      take: filter.limit + 1,
      select: userSelectFull(currentUserId),
    });

    const hasNext = usersWithFollowStatus?.length == filter.limit + 1;
    if (hasNext) {
      usersWithFollowStatus.pop();
    }
    // const total = await this.prisma.user.count({
    //   where: whereCondition,
    // });
    const usersWithFollowStatusAndPaging = usersWithFollowStatus.map(
      ({ user, ...rest }) => ({
        ...rest,
        isFollowed: user && user.length > 0 ? user[0].isFollow : false,
      }),
    );
    // let nextCursor: string | null = null;
    // if (users.length > limit) {
    //   const nextUser = users.pop();
    //   nextCursor = nextUser.id;
    // }
    // return { users, nextCursor };
    return {
      data: usersWithFollowStatusAndPaging,
      paging: {
        hasNext,
        page: filter.page,
        limit: filter.limit,
      },
    };
  }

  async getProfileWithShortLinkOrIdUser(input: string, user: any) {
    try {
      const currentUserId = user?.id;
      // const result: any = {};
      let isUuid = true;
      if (!isValidUUID(input)) {
        isUuid = false;
      }

      const result = await this.prisma.user.findFirst({
        where: {
          AND: [
            {
              ...(isUuid
                ? { id: input }
                : {
                    OR: [
                      { shortLink: { equals: input, mode: 'insensitive' } },
                      {
                        signer: {
                          equals: input.toLowerCase(),
                          mode: 'insensitive',
                        },
                      },
                    ],
                  }),
            },
            { isActive: true },
          ],
        },
        select: userSelectFull(currentUserId),
      });

      if (!result) {
        throw new NotFoundException();
      }

      const response =
        !currentUserId || currentUserId !== result.id
          ? this.minifyUserObject(result)
          : result;

      return response;
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async updateProfile(input: UpdateUserDto, user: User) {
    try {
      const { email, username, shortLink } = input;
      // Check for existing email
      // if (email) {
      //   const checkExistEmail = await this.checkUserExistence(
      //     'email',
      //     email,
      //     user.id,
      //   );
      //   if (checkExistEmail) {
      //     throw new Error('Email already exists');
      //   }
      // }
      // Check for existing username
      if (username) {
        const checkExistUsername = await this.checkUserExistence(
          'username',
          username,
          user.id,
        );
        if (checkExistUsername) {
          throw new Error('Username already exists');
        }
      }

      // Check for existing short link
      if (shortLink) {
        const checkExistShortLink = await this.checkUserExistence(
          'shortLink',
          shortLink,
          user.id,
        );
        if (checkExistShortLink) {
          throw new Error('Short Link already exists');
        }
      }

      const updateData = {
        // email: input.email,
        username: input.username,
        acceptedTerms: input.acceptedTerms,
        bio: input.bio,
        facebookLink: input.facebookLink,
        twitterLink: input.twitterLink,
        telegramLink: input.telegramLink,
        discordLink: input.discordLink,
        webURL: input.webURL,
        coverImage: input.coverImage,
        shortLink: input.shortLink,
        avatar: input.avatar,
        // verifyEmail: input.email && input.email === user.email,
        accountStatus:
          !input.twitterLink ||
          !input.bio ||
          !input.shortLink ||
          !input.avatar ||
          input.email !== user.email
            ? false
            : undefined,
      };

      // Remove shortLink if not provided
      if (!shortLink) {
        delete updateData.shortLink;
      }
      return await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: updateData,
      });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async checkUserExistence(field: string, value: string, userId: string) {
    const condition = {
      id: { not: userId },
      [field]: value,
    };

    const existingUser = await this.prisma.user.findFirst({
      where: { AND: [condition] },
    });

    return !!existingUser;
  }
  async getProjectByUser(
    query: findProjectsUserSubscribe,
    userId: string,
  ): Promise<ListProjectEntity> {
    try {
      const whereRounds: Prisma.ProjectRoundWhereInput = {};
      if (query.start) {
        whereRounds.start = { gte: new Date(query.start) };
      }

      if (query.end) {
        whereRounds.end = { lte: new Date(query.end) };
      }

      const user = await this.prisma.user.findFirst({
        where: {
          signer: userId.toLowerCase(),
        },
      });
      if (!user) {
        throw new NotFoundException('Subscriber not found');
      }
      const result = await this.prisma.userProject.findMany({
        where: {
          AND: [
            {
              userId: user.id,
            },
            {
              projectId: query.projectId,
            },
          ],
        },
        include: {
          project: {
            select: {
              ...projectSelect,
              rounds: {
                where: whereRounds,
                include: {
                  round: true,
                },
              },
            },
          },
        },
      });
      const response = result.map((subcriber) => {
        const { project } = subcriber;
        return {
          ...subcriber,
          project: {
            ...project,
            rounds: project.rounds.map((round) => ({
              ...round,
              ...round.round,
            })),
          },
        };
      });

      const res = this.formatData(response);
      return res;
    } catch (error) {
      console.error(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  async findActivityNFT(
    input: GetActivityUserDto,
  ): Promise<PagingResponseHasNext<any>> {
    try {
      const { user, page, limit, type } = input;
      const _limit = limit ?? 10;
      const _page = page ?? 1;

      const eUser = await this.prisma.aAWallet.findMany({
        where: {
          userId: user,
        },
      });
      if (eUser.length == 0) {
        return {
          data: [],
          paging: {
            hasNext: false,
            page: input.page,
            limit: input.limit,
          },
        };
      }
      const userWallets = eUser.map((e) => e.aaAddress);
      const whereCondition: Prisma.ActivityWhereInput = {
        AND: [
          {
            OR: [
              {
                to: {
                  in: userWallets,
                },
              },
              {
                from: {
                  in: userWallets,
                },
              },
            ],
          },
        ],
      };

      if (type) {
        whereCondition.type = type;
      }

      const activities = await this.prisma.activity.findMany({
        where: whereCondition,
        orderBy: {
          createdAt: 'desc',
        },
        take: _limit + 1,
        skip: (_page - 1) * _limit,
      });

      const isHasNext = activities?.length == _limit + 1;

      if (isHasNext) {
        activities.pop();
      }
      return {
        data: activities,
        paging: {
          hasNext: isHasNext,
          page: input.page,
          limit: input.limit,
        },
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async getUser(user: any) {
    try {
      if (isValidUUID(user)) {
        // If user is a valid UUID, search by ID
        const responseUser = await this.prisma.user.findFirst({
          where: { id: user },
        });
        return responseUser;
      } else {
        // If user is not a valid UUID, search by username or shortLink
        const responseUser = await this.prisma.user.findFirst({
          where: {
            OR: [{ username: user }, { shortLink: user }, { signer: user }],
          },
        });
        return responseUser;
      }
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  formatData(data) {
    if (data.length === 0) {
      throw new NotFoundException('User has not subscribed project');
    }
    const { userId, subscribeDate, stakingTotal, lastDateRecord, projectId } =
      data[0];
    const projects = data.map((item) => item?.project);

    return {
      userId,
      subscribeDate,
      stakingTotal,
      lastDateRecord,
      projectId,
      projects,
    };
  }

  async followUser(id: string, follower: User) {
    try {
      let isUuid = true;
      if (!isValidUUID(id)) {
        isUuid = false;
      }
      const user = await this.prisma.user.findFirst({
        where: {
          ...(isUuid ? { id } : { OR: [{ signer: id }, { shortLink: id }] }),
        },
      });
      if (!user) {
        throw new NotFoundException();
      }
      if (user.id == follower.id) {
        throw new Error('You cannot follow yourself');
      }
      const userFollowMatch = await this.prisma.userFollow.findFirst({
        where: {
          userId: user.id,
          followerId: follower.id,
        },
      });
      const existingFollow = await this.prisma.userFollow.upsert({
        where: {
          userId_followerId: {
            userId: user.id,
            followerId: follower.id,
          },
        },
        update: { isFollow: !userFollowMatch?.isFollow },
        create: {
          userId: user.id,
          followerId: follower.id,
          isFollow: true,
        },
      });
      const increment = !existingFollow.isFollow ? -1 : 1;
      // Followers
      await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          followers: {
            increment,
          },
        },
      });
      // Following
      await this.prisma.user.update({
        where: {
          id: follower.id,
        },
        data: {
          following: {
            increment,
          },
        },
      });
      await MetricCommon.handleMetric(
        TypeCategory.User,
        MetricCategory.Followers,
        user.id,
      );
      return { isFollowed: existingFollow.isFollow };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  async sendverifyEmail(input: SendVerifyEmailDto, user: User) {
    try {
      const { id } = user;
      const currentUser = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      if (!currentUser) {
        throw new NotFoundException();
      }
      if (input.email !== currentUser.email) {
        throw new Error('Email is incorrect');
      }

      const redisData = await this.checkRecord(`${currentUser.signer}-Verify`);

      if (redisData !== null) {
        throw new Error('Please Resend After 60 Seconds!');
      } else {
        const verifyToken = this.generateTokenConfirm(
          currentUser.email,
          currentUser.username,
          currentUser.id,
        );
        await this.saveTokenConfirm(`${currentUser.signer}-Verify`, {
          timestamp: `${Math.floor(Date.now() / 1000)}`,
          email: input.email,
          verifyToken: verifyToken,
          userId: `${currentUser.id}`,
        });
        await this.redisisService.publish('user-channel', {
          data: {
            isVerify: true,
            email: input.email,
            name: currentUser.username,
            id: currentUser.id,
            verifyToken: verifyToken,
          },
          process: 'email-verify',
        });
      }
      return true;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async checkVerifyEmail(input: VerifyEmailDto) {
    try {
      const validatie = this.verifyTokenConfirm(input.token);
      if (!validatie) {
        throw Error('Token is invalid');
      }
      const user = await this.prisma.user.findFirst({
        where: {
          id: validatie?.id,
        },
      });
      if (user.id != validatie?.id) {
        throw new Error('This email cannot be confirmed');
      }
      if (user && user?.verifyEmail) {
        throw new Error('This email has been verified');
      }
      const resultUpdate = await this.prisma.user.update({
        where: { id: validatie?.id },
        data: {
          verifyEmail: true,
        },
      });
      return resultUpdate;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async checkListVerify(user: User) {
    try {
      const listVerify = {};
      const client = this.getGraphqlClient();
      const sdk = getSdk(client);
      const variables: GetTransferNftQueryVariables = {
        id: user.signer,
      };
      const reponse = await sdk.getTransferNFT(variables);

      const nftTransfers =
        reponse?.erc1155Transfers?.length > 0 ||
        reponse?.erc721Transfers?.length > 0;

      if (!nftTransfers) {
        listVerify['ownerOrCreater'] = false;
      }
      const requiredFields = [
        'bio',
        'twitterLink',
        'username',
        'avatar',
        'verifyEmail',
      ];

      requiredFields.forEach((field) => {
        if (!user[field]) {
          listVerify[field] = false;
        }
      });
      if (Object.values(listVerify).some((value) => value === false)) {
        return { listVerify: listVerify, accountStatus: false };
      }

      if (user?.accountStatus == true) {
        throw new Error('Your account has been verified');
      }
      const resultGetVerify = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          accountStatus: true,
        },
      });

      await MetricCommon.handleMetric(
        TypeCategory.User,
        MetricCategory.Verified,
        user.id,
      );
      // return resultGetVerify;
      return { listVerify: {}, accountStatus: resultGetVerify?.accountStatus };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  verifyTokenConfirm(token: string): any {
    try {
      const decodedToken = jwt.verify(
        token,
        this.secretKeyConfirm,
      ) as JwtPayload;

      // Check expiration time manually if needed
      if (decodedToken && decodedToken.exp) {
        const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
        if (decodedToken.exp < currentTimestamp) {
          // Token has expired
          return null;
        }
      }
      return decodedToken;
    } catch (error) {
      return null; // Token verification failed
    }
  }

  generateTokenConfirm(email: string, name: string, id: string): string {
    // Set expiration time to 5 minutes
    const expirationTime = this.tokenExpirationTime;

    return jwt.sign({ email, name, id }, this.secretKeyConfirm, {
      expiresIn: expirationTime,
    });
  }

  async saveTokenConfirm(address: string, input: UserRedisinterface) {
    try {
      const result = await this.redisisService.setKeyObject(
        address,
        input,
        this.redisExpirationTime,
      );
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  async checkRecord(address: string) {
    try {
      const result = await this.redisisService.getKey(address);
      return result ? JSON.parse(result) : null;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  async fetchOrCreateUser(address: string) {
    try {
      // Attempt to find the user by their address
      let user = await this.prisma.user.findFirst({
        where: {
          signer: address.toLowerCase(),
        },
      });
      // If the user doesn't exist, create a new one
      if (!user) {
        user = await this.prisma.user.create({
          data: {
            signer: address.toLowerCase(),
            publicKey: address.toLowerCase(),
          },
        });
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getListFollowing(user: User, input: GetFollowingDto) {
    try {
      const whereCondition: Prisma.UserFollowWhereInput = {};
      whereCondition.AND = [];

      whereCondition.AND.push({
        followerId: user.id,
      });
      whereCondition.AND.push({
        isFollow: true,
      });

      if (input.search) {
        const userWhereCondition: Prisma.UserWhereInput = {};
        userWhereCondition.AND = [
          {
            ...(isValidUUID(input.search)
              ? { id: input.search }
              : {
                  OR: [
                    {
                      shortLink: { equals: input.search, mode: 'insensitive' },
                    },
                    {
                      signer: {
                        equals: input.search.toLowerCase(),
                        mode: 'insensitive',
                      },
                    },
                    {
                      username: {
                        contains: input.search,
                        mode: 'insensitive',
                      },
                    },
                  ],
                }),
          },
        ];

        whereCondition.user = userWhereCondition;
      }
      const listFollower = await this.prisma.userFollow.findMany({
        where: whereCondition,
        include: {
          user: {
            select: userFollow,
          },
          follower: {
            select: userFollow,
          },
        },
        skip: (input.page - 1) * input.limit,
        take: input.limit,
      });

      const hasNext = await PaginationCommon.hasNextPage(
        input.page,
        input.limit,
        'userFollow',
        whereCondition,
      );

      return {
        data: listFollower,
        paging: {
          hasNext: hasNext,
          page: input.page,
          limit: input.limit,
        },
      };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getListActivityWithEvent(user: User, input: GetListBid) {
    try {
      const { result, hasNext } =
        await this.activetiService.getActivityWithEvent(user, input);

      return {
        data: result,
        paging: {
          hasNext: hasNext,
          page: input.page,
          limit: input.limit,
        },
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
