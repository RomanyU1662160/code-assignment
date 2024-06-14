import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3001',
  documents: 'src/**/*.ts',

  generates: {
    'src/__generated__/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
