import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/cl92kxugp2vbc01ur0mbwagan/master',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/graphql.ts': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations']
    }
  }
}

export default config
