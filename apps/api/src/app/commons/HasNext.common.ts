import { Prisma, PrismaClient } from '@prisma/client';
// import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

type PrismaClientInstance = PrismaClient;
type AllKeysOfPrismaClient = keyof PrismaClientInstance;

// Exclude non-model methods
type NonModelKeys =
  | '$connect'
  | '$disconnect'
  | '$on'
  | '$transaction'
  | '$use'
  | '$queryRaw'
  | '$executeRaw';

type ModelNames = Exclude<AllKeysOfPrismaClient, NonModelKeys>;

class PaginationCommon {
  constructor(private prisma: PrismaService) {}
  async hasNextPage(
    page: number,
    limit: number,
    tableName: ModelNames, // Adjust based on your table names
    whereCondition:
      | Prisma.UserWhereInput
      | Prisma.NFTWhereInput
      | Prisma.CollectionWhereInput
      | Prisma.MarketplaceStatusWhereInput
      | Prisma.AccountWhereInput
      | Prisma.RoundInfoWhereInput
      | Prisma.ProjectWhereInput
      | Prisma.TopicWhereInput
      | Prisma.BlogWhereInput
      | Prisma.AnalysisCollectionWhereInput
      | Prisma.GameLayergWhereInput
      | Prisma.CategoryWhereInput
      | Prisma.OwnershipWhereInput
      | Prisma.ActivityWhereInput,
  ): Promise<boolean> {
    const skip = (page - 1) * limit;
    const take = limit * 2;
    // Use keyof to dynamically specify the model name
    const countQueryResult = await (
      this.prisma[tableName as keyof PrismaClientInstance] as any
    ).count({
      where: whereCondition,
      skip,
      take,
    });

    return countQueryResult > limit;
  }
}

export default new PaginationCommon(new PrismaService());
