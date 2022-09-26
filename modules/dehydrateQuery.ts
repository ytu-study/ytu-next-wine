import { queryClient } from "@/components/provider/ReactQueryProvider";
import { FetchQueryOptions, QueryFunction, QueryKey } from "@tanstack/query-core/src/types";
import { dehydrate, DehydratedState } from "@tanstack/react-query";
import { isFunction } from "lodash";

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

type Functions = (...args: any[]) => any;
type GraphqlQuery<T extends Functions, TVariables> = T & {
  getKey<V extends TVariables>(variables?: V): QueryKey;
  fetcher<V extends TVariables>(variables?: V, options?: HeadersInit): () => Promise<ReturnType<T>>;
};

export const prefetch = async <T extends Functions, V extends Parameters<T>[0], Q extends Pick<GraphqlQuery<T, V>, "getKey" | "fetcher">>(
  graphqlQuery: T,
  variables?: V,
  options?: FetchQueryOptions<Q, unknown, ReturnType<Q["fetcher"]>>,
) => {
  const { getKey, fetcher } = graphqlQuery as Q;
  await queryClient.prefetchQuery(getKey(variables), fetcher(variables), options);

  return dehydrate(queryClient);
};

export const dehydrateQuery = new DehydrateQuery();
