import { useFetchWines } from '@/hooks/apis/useFetchWines';
import { useRouter } from 'next/router';

function Detail(){
  const { data, isLoading } = useFetchWines();
  const router = useRouter();
  const wine = router.query.id;

  console.log('wine',wine);

  return(
    <div>
      <div>detailPage</div>
    </div>
  )
}

export default Detail;
