import documents from "@/graphql";
import { Query } from "@/types/graphql";
import { GraphQLClient as _GraphQLClient, RequestDocument, Variables } from "graphql-request";
import * as Dom from "graphql-request/src/types.dom";
import snakeCase from "lodash/snakeCase";
import { ScreamingSnakeCase } from "type-fest";

type QueryResponse = Omit<Query, "__typename">;
export type QueryType = {
  readonly [P in keyof QueryResponse as ScreamingSnakeCase<keyof Pick<QueryResponse, P>>]: P;
};

class GraphQLClient extends _GraphQLClient implements QueryType {
  readonly GET_VIVINO_WINE = "getVivinoWine";
  readonly GET_VIVINO_WINES = "getVivinoWines";
  readonly GET_WINE = "getWine";
  readonly GET_WINES = "getWines";
  readonly GET_WINE_COUNTRIES = "getWineCountries";
  readonly GET_WINE_COUNTRY = "getWineCountry";
  readonly GET_WINE_FOOD = "getWineFood";
  readonly GET_WINE_FOODS = "getWineFoods";
  readonly GET_WINE_GRAPE = "getWineGrape";
  readonly GET_WINE_GRAPES = "getWineGrapes";
  readonly GET_WINE_IDS = "getWineIds";
  readonly GET_WINE_TYPES = "getWineTypes";

  constructor() {
    super(process.env.NEXT_PUBLIC_API_URL);
  }
}

export class Graphql extends GraphQLClient {
  get<K extends keyof QueryResponse, T = Pick<QueryResponse, K>, V = Variables>(
    key: K,
    variables?: V,
    requestHeaders?: Dom.RequestInit["headers"],
  ): Promise<T> {
    const type = snakeCase(key).toUpperCase() as keyof typeof documents;
    const _document = documents[type] as RequestDocument;
    return super.request(_document, variables, requestHeaders);
  }
}
export const graphql = new Graphql();
