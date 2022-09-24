declare module '*.gql' {
  import { RequestDocument } from 'graphql';
  const schema: RequestDocument;
  export default schema;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
  }
}
