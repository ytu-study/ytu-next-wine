import WineInfo from '@/components/detail/WineInfo';
import { prefetch } from '@/modules/dehydrateQuery';
import { useGetVivinoWineQuery } from '@/generated/graphql';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string }>) {
  const variables = { id: context.params?.id as string };
  const dehydratedState = await prefetch(useGetVivinoWineQuery, variables);
  return {
    props: { dehydratedState, variables },
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
  variables: {
    id: string;
  };
};

function Detail({ variables }: DetailProps) {
  const { data } = useGetVivinoWineQuery(variables);

  return (
    <div>
      <WineInfo variables={variables} />
    </div>
  );
}

export default Detail;
