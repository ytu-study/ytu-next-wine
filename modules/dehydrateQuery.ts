import { queryClient } from '@/components/provider/ReactQueryProvider';
import { FetchQueryOptions, QueryFunction, QueryKey } from '@tanstack/query-core/src/types';
import { dehydrate, DehydratedState } from '@tanstack/react-query';
import { isFunction } from 'lodash';

const isQueryKey = <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
  arg1: TQueryKey | FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): arg1 is TQueryKey => {
  return Array.isArray(arg1);
};

const isQueryFunction = <TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
  arg2?: QueryFunction<TQueryFnData, TQueryKey> | FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): arg2 is QueryFunction<TQueryFnData, TQueryKey> => {
  return isFunction(arg2);
};

class DehydrateQuery {
  async prefetch<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ): Promise<DehydratedState>;
  async prefetch<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    queryKey: TQueryKey,
    options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ): Promise<DehydratedState>;
  async prefetch<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ): Promise<DehydratedState>;
  async prefetch<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
    arg1: TQueryKey | FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    arg2?: QueryFunction<TQueryFnData, TQueryKey> | FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    arg3?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  ): Promise<DehydratedState> {
    await (() => {
      if (!isQueryKey(arg1)) return queryClient.prefetchQuery(arg1);
      if (!isQueryFunction(arg2)) return queryClient.prefetchQuery(arg1, arg2);
      return queryClient.prefetchQuery(arg1, arg2, arg3);
    })();

    return dehydrate(queryClient);
  }
}

export const dehydrateQuery = new DehydrateQuery();
