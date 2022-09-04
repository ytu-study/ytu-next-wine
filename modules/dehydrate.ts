import { dehydrate, DehydratedState, QueryClient, QueryKey } from 'react-query';
import { FetchQueryOptions, QueryFunction } from 'react-query/types/core/types';

export class Dehydrate extends QueryClient {
  static async prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<{ dehydratedState: DehydratedState }>
  static async prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<{ dehydratedState: DehydratedState }>
  static async prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<{ dehydratedState: DehydratedState }>
  static async prefetchQuery(options) {
    const queryClient = new Dehydrate();
    await queryClient.prefetchQuery(options);

    return { dehydratedState: dehydrate(queryClient) };
  }
}
