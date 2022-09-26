import WineCard from "@/components/list/wineCard";
import For from "@/components/util/for";
import { prefetch } from "@/modules/dehydrateQuery";
import { PaginatedVivinoWine, useGetVivinoWinesQuery } from "@/generated/graphql";

type ListProps = {
  variables: {
    page: number;
    display: number;
  };
};

export async function getServerSideProps() {
  const variables = { page: 1, display: 10 };
  const dehydratedState = await prefetch(useGetVivinoWinesQuery, variables);
  return {
    props: { dehydratedState, variables },
  };
}

export default function List({ variables }: ListProps) {
  const { data } = useGetVivinoWinesQuery(variables, { suspense: true });
  const wines = data?.getVivinoWines as PaginatedVivinoWine;

  return (
    <>
      <For each={wines.items}>{wine => <WineCard key={wine.id} data={wine}></WineCard>}</For>
    </>
  );
}
