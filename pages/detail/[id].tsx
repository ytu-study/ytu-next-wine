import api from '@/api';
import WineInfo from '@/components/detail/WineInfo';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

function Detail() {
  const router = useRouter();
  const wineId = router.query.id as string;
  const { data: { getWine: wine }, isLoading } = useQuery(api.WINE, () => api.fetchWine({ id: wineId }), {
    enabled: !!wineId,
  });

  console.log('wine', wineId, wine, isLoading);

  return (
    <div>
      <WineInfo info={wine} isLoading={isLoading} />
    </div>
  );
}

export default Detail;
