import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const config: CodegenConfig = {
  overwrite: true,
  // schema: [
  //   process.env.SUBGRAPH_URL as string,
  //   process.env.SUBGRAPH_URL_STAKING as string,
  //   process.env.SUBGRAPH_URL_DEX as string
  // ],
  // documents: 'src/**/*.graphql',
  generates: {
    'apps/analysis-worker/src/app/generated/graphql.ts': {
      schema: [
        process.env.SUBGRAPH_URL as string,
        process.env.SUBGRAPH_URL_STAKING as string,
        process.env.SUBGRAPH_URL_DEX as string,
      ],
      documents: 'apps/analysis-worker/src/app/graph-query/*.graphql',
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-graphql-request',
        'typescript-operations',
      ],
    },
    'apps/analysis-worker/src/app/generated/Template1155/graphql.ts': {
      schema: process.env.SUBGRAPH_TEMPLATE_1155 as string,
      documents:
        'apps/analysis-worker/src/app/graph-query-template-1155/*.graphql',
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-graphql-request',
        'typescript-operations',
      ],
    },
    'apps/analysis-worker/src/app/generated/Template721/graphql.ts': {
      schema: process.env.SUBGRAPH_TEMPLATE_721 as string,
      documents:
        'apps/analysis-worker/src/app/graph-query-template-721/*.graphql',
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-graphql-request',
        'typescript-operations',
      ],
    },
    'apps/analysis-worker/src/app/generated/SubgraphExternal/graphql.ts': {
      schema: process.env.SUBGRAPH_EXTERNAL_URL as string,
      documents: 'apps/analysis-worker/src/app/graph-query-external/*.graphql',
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-graphql-request',
        'typescript-operations',
      ],
    },
  },
};

export default config;
