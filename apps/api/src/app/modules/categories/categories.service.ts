import PaginationCommon from '@/apps/api/src/app/commons/HasNext.common';
import OtherCommon from '@/apps/api/src/app/commons/Other.common';
import { GetAllCategoryDto } from '@/apps/api/src/app/modules/categories/dto/query-category.dto';
import { PrismaService } from '@/shared/src/lib/services';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async findAll(
    input: GetAllCategoryDto,
  ): Promise<PagingResponseHasNext<Category>> {
    try {
      const { page, limit, search } = input;

      const whereCondition: Prisma.CategoryWhereInput = {};
      if (search) {
        whereCondition.nameSlug = {
          contains: OtherCommon.stringToSlug(search),
          mode: 'insensitive',
        };
      }

      const [data, hasNext] = await Promise.all([
        this.prisma.category.findMany({
          where: whereCondition,
          skip: (page - 1) * limit,
          take: limit,
        }),
        PaginationCommon.hasNextPage(page, limit, 'category', whereCondition),
      ]);
      return {
        data: data,
        paging: {
          limit: input.limit,
          page: input.page,
          hasNext: hasNext,
        },
      };
    } catch (error) {
      throw new HttpException(
        `${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
