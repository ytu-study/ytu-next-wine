declare module "*.gql" {
  import { DocumentNode } from "@/types/graphql";
  const Schema: DocumentNode;

  export = Schema;
}
