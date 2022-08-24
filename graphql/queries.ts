import { gql } from "graphql-request";

export const getWinesQuery = gql`
  query {
    getWines(display: 20) {
      _id
      name
      enName
      image
      category
      country
      grape
      price
      sweet
      body
      tanin
      winery
      foodMatching
    }
  }
`