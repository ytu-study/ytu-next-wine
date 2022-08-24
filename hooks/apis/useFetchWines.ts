import { getWines } from "@/graphql";
import { useQuery } from "react-query";

export function useFetchWines() {
  return useQuery('wines', getWines)
}