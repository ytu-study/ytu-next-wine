import { QueryType } from "@/modules/graphql";
import GET_WINE from "./query/getWine.gql";
import GET_WINES from "./query/getWines.gql";
import GET_WINE_IDS from "./query/getWineIds.gql";
import GET_VIVINO_WINE from "./query/getVivinoWine.gql";
import GET_VIVINO_WINES from "./query/getVivinoWines.gql";
import { RequestDocument } from "graphql-request";

type Documents = { [P in keyof QueryType]: RequestDocument };
export default { GET_WINE, GET_WINES, GET_WINE_IDS, GET_VIVINO_WINE, GET_VIVINO_WINES } as Documents;
