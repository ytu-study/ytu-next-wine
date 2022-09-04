import GET_WINE from '@/graphql/query/getWine.gql';
import GET_WINES from '@/graphql/query/getWines.gql';
import { Graphql } from '@/modules/graphql';
import { QueryGetWineArgs, QueryGetWinesArgs } from '@/types/graphql';

class Key {
  readonly WINE = 'wine';
  readonly WINES = 'wines';
}

export class Api extends Key {
  fetchWine(wineArgs: QueryGetWineArgs) {
    return Graphql.get(GET_WINE, wineArgs);
  }

  fetchWines(winesArgs?: QueryGetWinesArgs) {
    return Graphql.get(GET_WINES, winesArgs);
  }
}

const api = new Api();
export default api;
