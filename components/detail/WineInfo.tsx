import WineTaste from '@/components/detail/WineTaste';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import {Wine} from '@/types/graphql';
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

type Info = {
  info: Wine;
  isLoading: boolean;
}

function WineInfo(props: Info){
  // console.log('info', props.info.category);

  const [loading, setLoading] = useState(true);
  const wine = props.info;

  return(
    <Info>
      <WineImg>
        <Image src="/img/wine.png" width={320} height={430}/>
      </WineImg>
      <div>
        <div>
          <Summary>
            {props.isLoading ? (<Skeleton width={196} height={18} containerClassName="skeleton"/>) : (
              <Category>{ wine?.category}</Category>
            )}
            <span>{wine?.country}</span>
            <span>|</span>
            <span>{wine?.winery}</span>
          </Summary>
          <div>
          </div>
        </div>
        <div>
          <h3>{wine?.name}</h3>
          <p>{wine?.enName}</p>
        </div>
        <div>
          <p>{wine?.price}</p>
        </div>
        <Detail>
          <div>
           <WineTaste info={wine} />
          </div>
        </Detail>
        <div>
          <span>포도</span>
        </div>
        <div>
          <span>어울리는 음식</span>
        </div>
      </div>
    </Info>
  )
}

export default WineInfo;