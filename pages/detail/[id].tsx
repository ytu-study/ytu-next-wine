import WineInfo from '@/components/detail/WineInfo';
import { useFetchWine } from '@/hooks/apis/wine';
import { useRouter } from 'next/router';

function Detail(){

  const router = useRouter();

  const wineId = router.query.id as string;
  const { data, isLoading } = useFetchWine({id: wineId});

  console.log('wine',wineId, data, isLoading);

  return(
    <div>
      <WineInfo info={data} isLoading={isLoading}/>
    </div>
  )
}

export default Detail;
