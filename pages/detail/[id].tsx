import api from '@/api';
import WineInfo from '@/components/detail/WineInfo';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

function Detail() {
  const router = useRouter();
  const wineId = router.query.id as string;

  return (
    <div>
      <WineInfo id={wineId}/>
    </div>
  );
}

export default Detail;
