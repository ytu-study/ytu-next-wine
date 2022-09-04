import { Graphql } from '@/graphql';
import GET_WINES from '@/graphql/query/getWines.gql';
import GET_WINE from '@/graphql/query/getWine.gql';
import { QueryGetWineArgs, QueryGetWinesArgs } from '@/types/graphql';
import { useQuery } from 'react-query';

export function useFetchWines(paginationArgs?: QueryGetWinesArgs) {
  return useQuery('wines', () => Graphql.get(GET_WINES, paginationArgs).then(data => data.getWines));
}

export function useFetchWine(wineArgs: QueryGetWineArgs) {
  return useQuery('wine', () => Graphql.get(GET_WINE, wineArgs).then(data => data.getWine))
}
