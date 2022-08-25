import { GraphQLClient } from "graphql-request";
// import { getWinesQuery } from "./queries";
import GET_WINES from "@/graphql/query/getWines.gql";

const API_URL = "https://ytu-wine-api.netlify.app/v1/graphql";

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: "Bearer Token",
  },
});

export const getWines = async () => {
  const { getWines: result } = await graphQLClient.request(GET_WINES, {
    display: 10,
  });
  return result;
};
