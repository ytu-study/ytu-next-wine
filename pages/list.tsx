import api from '@/api';
import { Dehydrate } from '@/modules/dehydrate';
import { GetServerSidePropsContext } from 'next';
import { useQuery } from 'react-query';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const props = await Dehydrate.prefetchQuery(api.WINES, () => api.fetchWines({ page: 1, display: 10 }));
  return { props };
}

export default function List() {
  const { data } = useQuery(api.WINES, () => api.fetchWines({ page: 1, display: 10 }));
}
