import api from '@/api';
import WineCard from '@/components/list/wineCard';
import For from '@/components/util/for';
import { dehydrateQuery } from '@/modules/dehydrateQuery';
import { PaginatedVivinoWine, useGetVivinoWinesQuery } from '@/generated/graphql';

type ListProps = {
  page: number;
  display: number;
};

export async function getServerSideProps() {
  const variables = { page: 1, display: 10 };
  const dehydratedState = await dehydrateQuery.prefetch(['getVivinoWines', variables], () => api.fetchVivinoWines(variables));
  return {
    props: { dehydratedState, ...variables },
  };
}

export default function List({ page, display }: ListProps) {
  const { data } = useGetVivinoWinesQuery({ page, display }, { suspense: true });
  const wines = data?.getVivinoWines as PaginatedVivinoWine;

  return (
    <>
      <For each={wines.items}>{wine => <WineCard key={wine.id} data={wine}></WineCard>}</For>
    </>
  );
}
