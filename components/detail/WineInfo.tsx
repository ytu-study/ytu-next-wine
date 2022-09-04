import api from '@/api';
import WineTaste from '@/components/detail/WineTaste';
import Image from 'next/image';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const Info = styled.div`
  display: flex;
`

const Summary = styled.div`
  .skeleton{ width: 50px; height: 20px; display: inline-block;}
`

const WineImg = styled.div`

`

const Category = styled.div`
  display: inline-block;
  background-color: #ea9ab2;
  padding: 5px 15px;
  border-radius: 4px;
`

const Detail = styled.div`
  >div{
    display: inline-block;
    >div{
      display: inline-block;
    }
  }

`
type WineInfoProps = {
  id: string;
}

function WineInfo(props: WineInfoProps){
  const wineId = props.id
  const { data: wine, isLoading } = useQuery(api.WINE, () => api.fetchWine({ id: wineId }).then(data => data.getWine), {
    enabled: !!wineId,
  });

  if(!wine) return null;

  return(
    <Info>
      <WineImg>
        <Image src={wine.image} width={320} height={430}/>
      </WineImg>
      <div>
        <div>
          <Summary>
            {isLoading ? (<Skeleton width={196} height={18} containerClassName="skeleton"/>) : (
              <Category>{ wine.category}</Category>
            )}
            <span>{wine.country}</span>
            <span>|</span>
            <span>{wine.winery}</span>
          </Summary>
          <div>
          </div>
        </div>
        <div>
          <h3>{wine.name}</h3>
          <p>{wine.enName}</p>
        </div>
        <div>
          <p>{wine.price}</p>
        </div>
        <Detail>
          <div>
           <WineTaste info={wine} />
          </div>
        </Detail>
        <div>
          <span>포도</span>
          <span>{wine.grape}</span>
        </div>
        <div>
          {
            wine.foodMatching.length > 0 ?  <span>어울리는 음식</span> : null
          }
        </div>
      </div>
    </Info>
  )
}

export default WineInfo;