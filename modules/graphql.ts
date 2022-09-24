import snakeCase from 'lodash/snakeCase';
import { Query } from '@/types/graphql';
import { GraphQLClient as _GraphQLClient, Variables } from 'graphql-request';
import * as Dom from 'graphql-request/src/types.dom';
import { ScreamingSnakeCase } from 'type-fest';
import documents from '@/graphql';

type QueryResponse = Omit<Query, '__typename'>;
export type QueryType = { readonly [P in keyof QueryResponse as ScreamingSnakeCase<keyof QueryResponse>]: P };

class GraphQLClient extends _GraphQLClient implements QueryType {
  readonly GET_VIVINO_WINE = 'getVivinoWine';
  readonly GET_VIVINO_WINES = 'getVivinoWines';
  readonly GET_WINE = 'getVivinoWine';
  readonly GET_WINES = 'getVivinoWine';
  readonly GET_WINE_COUNTRIES = 'getVivinoWine';
  readonly GET_WINE_COUNTRY = 'getVivinoWine';
  readonly GET_WINE_FOOD = 'getVivinoWine';
  readonly GET_WINE_FOODS = 'getVivinoWine';
  readonly GET_WINE_GRAPE = 'getVivinoWine';
  readonly GET_WINE_GRAPES = 'getVivinoWine';
  readonly GET_WINE_IDS = 'getVivinoWine';
  readonly GET_WINE_TYPE = 'getVivinoWine';
  readonly GET_WINE_TYPES = 'getVivinoWine';

  constructor() {
    super(process.env.NEXT_PUBLIC_API_URL);
  }
}

export class Graphql extends GraphQLClient {
  get<K extends keyof QueryResponse, T = Pick<QueryResponse, K>, V = Variables>(
    key: K,
    variables?: V,
    requestHeaders?: Dom.RequestInit['headers'],
  ): Promise<T> {
    const type = snakeCase(key).toUpperCase() as keyof typeof documents;
    const _document = documents[type];
    return super.request(_document, variables, requestHeaders);
  }
}
export const graphql = new Graphql();
