import { GraphQLClient } from "graphql-request";
import GET_WINES from "@/graphql/query/getWines.gql";

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);

export const getWines = async () => {
  const { getWines: result } = await graphQLClient.request(GET_WINES, {
    display: 10,
  });
  return result;
};
