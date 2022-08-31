/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query } from '@/types/graphql';
import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';
import * as Dom from 'graphql-request/src/types.dom';

const symbol = Symbol('graphql');

export class Graphql extends GraphQLClient {
  static graphql: Graphql;

  constructor(_symbol: symbol) {
    super(process.env.NEXT_PUBLIC_API_URL);
    if (_symbol !== symbol) throw new Error('use Graphql.get()');
  }

  static get<T = Query, V = Variables>(document: RequestDocument, variables?: V, requestHeaders?: Dom.RequestInit['headers']): Promise<T> {
    if (!this.graphql) this.graphql = new Graphql(symbol);
    return this.graphql.request(document, variables, requestHeaders);
  }
}
