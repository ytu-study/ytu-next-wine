import api from '@/api';
import LoadingPage from '@/components/common/LoadingPage';
import WineInfo from '@/components/detail/WineInfo';
import { Dehydrate } from '@/modules/dehydrate';
import { GetServerSidePropsContext } from 'next';
import { useQuery } from 'react-query';
import { Suspense } from 'react';
//
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const wineId = context.query.id as string;
  const dehydratedState = await Dehydrate.prefetchQuery(api.WINE, () => api.fetchWine({ id: wineId }).then(data => data.getWine));
  return {
    props: { dehydratedState, wineId },
  };
}

// export async function getStaticProps(context: GetServerSidePropsContext) {
//   const wineId = context.params.id as string;
//   const dehydratedState = await Dehydrate.prefetchQuery(api.WINE, () => api.fetchWine({ id: wineId }).then(data => data.getWine));
//   return {
//     props: { dehydratedState, wineId },
//   };
// }
//
// export async function getStaticPaths(){
//   const data = await api.fetchWineIds().then((data) => data.getWineIds);
//   console.log('res', data);
//   const paths = data.map((a ) => ({ params: { id: `${a}` } }));
//
//   return {
//     paths,
//     fallback: false,
//   };
// }
export type DetailProps = {
  wineId: string;
};

function Detail(props: DetailProps) {
  const { data } = useQuery(api.WINE, () => api.fetchWine({ id: props.wineId }), { suspense: true });

  console.log('data', data);
  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <WineInfo wineId={props.wineId} />
      </Suspense>
    </div>
  );
}

export default Detail;
