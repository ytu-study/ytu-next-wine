import api from '@/api';
import WineCard from '@/components/list/wineCard';
import For from '@/components/util/for';
import { Dehydrate } from '@/modules/dehydrate';
import { PaginatedVivinoWine } from '@/types/graphql';
import { useQuery } from 'react-query';

export async function getServerSideProps() {
  const dehydratedState = await Dehydrate.prefetchQuery(api.GET_VIVINO_WINES, () => api.fetchVivinoWines({ page: 1, display: 10 }));
  return {
    props: { dehydratedState },
  };
}

export default function List() {
  const { data } = useQuery(api.GET_VIVINO_WINES, () => api.fetchVivinoWines(), { suspense: true });
  const wines = data?.getVivinoWines as PaginatedVivinoWine;

  return (
    <>
      <For each={wines.items}>{wine => <WineCard key={wine.id} data={wine}></WineCard>}</For>
    </>
  );
}
