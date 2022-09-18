import GET_WINE from '@/graphql/query/getWine.gql';
import GET_WINES from '@/graphql/query/getWines.gql';
import GET_WINEIDS from '@/graphql/query/getWineIds.gql';
import { Graphql } from '@/modules/graphql';
import { QueryGetWineArgs, QueryGetWinesArgs } from '@/types/graphql';

class Key {
  readonly WINE = 'wine';
  readonly WINES = 'wines';
  readonly WINEIDS = 'wineIds';
}

export class Api extends Key {
  fetchWine(wineArgs: QueryGetWineArgs) {
    return Graphql.get(GET_WINE, wineArgs);
  }

  fetchWines(winesArgs?: QueryGetWinesArgs) {
    return Graphql.get(GET_WINES, winesArgs);
  }

  fetchWineIds() {
    return Graphql.get(GET_WINEIDS);
  }
}

const api = new Api();
export default api;
