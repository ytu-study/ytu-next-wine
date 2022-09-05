import { dehydrate, DehydratedState, QueryClient, QueryKey } from 'react-query';
import { FetchQueryOptions, QueryFunction } from 'react-query/types/core/types';

export class Dehydrate {
  static async prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ): Promise<DehydratedState>;
  static async prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    queryKey: TQueryKey,
    options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ): Promise<DehydratedState>;
  static async prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ): Promise<DehydratedState>;
  static async prefetchQuery(...args: unknown[]) {
    const client = new QueryClient();
    await client.prefetchQuery(...(args as Parameters<QueryClient['prefetchQuery']>));
    return dehydrate(client);
  }
}
