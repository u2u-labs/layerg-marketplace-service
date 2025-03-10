import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AccessControlService } from '../../shared/AccessControlService';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { LocalStrategy } from '../auth/strategies/local.strategy';
import { RefreshTokenStrategy } from '../auth/strategies/refreshToken.strategy';
import { CollectionModule } from '../collection/collection.module';
import { CollectionPriceService } from '../collection/collectionPrice.service';
import { GetCollectionMarketData } from '../graph-qlcaller/getCollectionMarketData.service';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { ActivityService } from '../nft/activity.service';
import { NFTHepler } from '../nft/helper/nft-helper.service';
import { MarketplaceService } from '../nft/nft-marketplace.service';
import { NftService } from '../nft/nft.service';
import { TokenService } from '../nft/token.service';
import { TraitService } from '../nft/trait.service';
import { UserService } from '../user/user.service';
import { ValidatorService } from '../validator/validator.service';
import { AccountController } from './controller/account-cms.controller';
import { BlogController } from './controller/blog-cms.controller';
import { CMSController } from './controller/cms.controller';
import { LaunchPadController } from './controller/launchpad-cms.controller';
import { MarketplaceController } from './controller/marketplace-cms.controller';
import { TopicController } from './controller/topic-cms.controller';
import { AuthCMSService } from './service/auth-cms.service';
import { BlogService } from './service/blog-cms.service';
import { CMSService } from './service/cms.service';
import { LaunchPadService } from './service/launchpad-cms.service';
import { MarketplaceCMSService } from './service/marketplace-cms.service';
import { CMSOptionService } from './service/option-cms.service';
import { TopicService } from './service/topic-cms.service';

import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        signOptions: {
          expiresIn: '1d',
        },
        secret: process.env.JWT_SECRET_ADMIN,
      }),
    }),
    ConfigModule,
    PassportModule,
    CollectionModule,
  ],
  controllers: [
    CMSController,
    MarketplaceController,
    LaunchPadController,
    TopicController,
    BlogController,
    AccountController,
  ],
  providers: [
    AuthService,
    UserService,
    GraphQlcallerService,
    ActivityService,
    PrismaService,
    JwtStrategy,
    RefreshTokenStrategy,
    LocalStrategy,
    AuthCMSService,
    AccessControlService,
    CMSService,
    NftService,
    TokenService,
    MarketplaceService,
    ValidatorService,
    CollectionPriceService,
    GetCollectionMarketData,
    TraitService,
    MarketplaceCMSService,
    LaunchPadService,
    CMSOptionService,
    TopicService,
    BlogService,
    NFTHepler,
    RedisService,
  ],
})
export class CMSModule {}
