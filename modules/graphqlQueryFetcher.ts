import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export const graphqlQueryFetcher = <TData, TVariables>(query: string, variables?: TVariables, headers?: RequestInit["headers"]) => {
  return async (): Promise<TData> => graphQLClient.request<TData, TVariables>(query, variables, headers);
};
