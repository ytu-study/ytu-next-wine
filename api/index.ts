import { Graphql } from '@/modules/graphql';
import { QueryGetVivinoWineArgs, QueryGetVivinoWinesArgs, QueryGetWineArgs, QueryGetWinesArgs } from '@/generated/graphql';

export class Api extends Graphql {
  /** @deprecated fetchVivinoWine으로  대체 */
  fetchWine(wineArgs: QueryGetWineArgs) {
    return this.get(this.GET_WINE, wineArgs);
  }

  /** @deprecated fetchVivinoWines로  대체 */
  fetchWines(winesArgs?: QueryGetWinesArgs) {
    return this.get(this.GET_WINES, winesArgs);
  }

  /** @deprecated */
  fetchWineIds() {
    return this.get(this.GET_WINE_IDS);
  }

  fetchVivinoWine(args?: QueryGetVivinoWineArgs) {
    return this.get(this.GET_VIVINO_WINE, args);
  }

  fetchVivinoWines(args?: QueryGetVivinoWinesArgs) {
    return this.get(this.GET_VIVINO_WINES, args);
  }
}

const api = new Api();
export default api;
