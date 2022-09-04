import GET_WINE from '@/graphql/query/getWine.gql';
import GET_WINES from '@/graphql/query/getWines.gql';
import { Graphql } from '@/modules/graphql';
import { QueryGetWineArgs, QueryGetWinesArgs } from '@/types/graphql';

export class Api extends Graphql {
  fetchWine(wineArgs: QueryGetWineArgs) {
    return this.get(GET_WINE, wineArgs);
  }

  fetchWines(winesArgs?: QueryGetWinesArgs) {
    return this.get(GET_WINES, winesArgs);
  }
}

const api = new Api();
export default api;
