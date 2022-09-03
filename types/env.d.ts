declare module '*.gql' {
  import { RequestDocument } from 'graphql';
  const schema: RequestDocument;
  export default schema;
}
