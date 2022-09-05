import api from '@/api';
import WineInfo from '@/components/detail/WineInfo';
import { Dehydrate } from '@/modules/dehydrate';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const wineId = context.query.id as string;
  const dehydratedState = await Dehydrate.prefetchQuery(api.WINE, () => api.fetchWine({ id: wineId }).then(data => data.getWine));
  return {
    props: { dehydratedState, wineId },
  };
}

export type DetailProps = {
  wineId: string;
};

function Detail(props: DetailProps) {
  return (
    <div>
      <WineInfo wineId={props.wineId} />
    </div>
  );
}

export default Detail;
