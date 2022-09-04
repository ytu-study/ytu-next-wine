import api from '@/api';
import { Dehydrate } from '@/modules/dehydrate';
import { GetServerSidePropsContext } from 'next';
import { useQuery } from 'react-query';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const dehydratedState = await Dehydrate.prefetchQuery(api.WINES, () => api.fetchWines({ page: 1, display: 10 }))
  return {
    props: { dehydratedState }
  };
}

export default function List() {
  const { data, isLoading } = useQuery(api.WINES, () => api.fetchWines({ page: 1, display: 10 }));

  if (isLoading) return null;
  return (
    <>
      {data.getWines.map(wine => (<div key={wine._id}>{wine.name}</div>))}
    </>
  );
}
