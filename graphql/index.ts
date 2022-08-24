import { GraphQLClient, gql } from "graphql-request";
import { getWinesQuery } from "./queries";

const API_URL = 'https://ytu-wine-api.netlify.app/v1/graphql'

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: 'Bearer Token'
  }
})

export const getWines = async () => {
  const { getWines: result } = await graphQLClient.request(getWinesQuery);
  return result;
}