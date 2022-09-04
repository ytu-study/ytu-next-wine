import { Query } from '@/types/graphql';
import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';
import * as Dom from 'graphql-request/src/types.dom';

export class Graphql extends GraphQLClient {
  private static graphql: Graphql;

  constructor() {
    super(process.env.NEXT_PUBLIC_API_URL);
  }

  static get<T = Omit<Query, '__typename'>, V = Variables>(document: RequestDocument, variables?: V, requestHeaders?: Dom.RequestInit['headers']): Promise<T> {
    if (!this.graphql) this.graphql = new Graphql();
    return this.graphql.get(document, variables, requestHeaders);
  }

  get<T = Omit<Query, '__typename'>, V = Variables>(document: RequestDocument, variables?: V, requestHeaders?: Dom.RequestInit['headers']): Promise<T> {
    return this.request(document, variables, requestHeaders);
  }
}
