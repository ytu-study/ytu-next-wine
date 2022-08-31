import { Graphql } from '@/graphql';
import GET_WINES from '@/graphql/query/getWines.gql';
import { QueryGetWinesArgs } from '@/types/graphql';
import { useQuery } from 'react-query';

export function useFetchWines(paginationArgs?: QueryGetWinesArgs) {
  return useQuery('wines', () => Graphql.get(GET_WINES, paginationArgs).then(data => data.getWines));
}
