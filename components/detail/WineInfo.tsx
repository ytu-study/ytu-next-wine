import api from '@/api';
import WineTaste from '@/components/detail/WineTaste';
import { DetailProps } from '@/pages/detail/[id]';
import { useGetVivinoWineQuery, VivinoWineEntity } from '@/generated/graphql';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

const Info = styled.div`
  display: flex;
`;

const Summary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  column-gap: 10px;
  .skeleton {
    width: 50px;
    height: 20px;
    display: inline-block;
  }
`;

const WineImg = styled.div`
  margin-right: 50px;
`;

const Category = styled.div`
  display: inline-block;
  background-color: #ea9ab2;
  padding: 5px 15px;
  border-radius: 4px;
`;

const Detail = styled.div`
  > div {
    display: inline-block;
    > div {
      display: inline-block;
    }
  }
`;

function WineInfo(props: DetailProps) {
  const { data, isLoading } = useGetVivinoWineQuery({ id: props.wineId });
  const wine = data?.getVivinoWine as VivinoWineEntity;

  return null;
  // return (
  // <Info>
  //   <WineImg>
  //     <Image src={wine.image} width={320} height={430} />
  //   </WineImg>
  //   <div>
  //     <div>
  //       <Summary>
  //         {isLoading ? <Skeleton width={196} height={18} containerClassName="skeleton" /> : <Category>{wine.category}</Category>}
  //         <div>{wine.country}</div>
  //         <div>|</div>
  //         <div>{wine.winery}</div>
  //       </Summary>
  //       <div></div>
  //     </div>
  //     <div>
  //       <h3>{wine.name}</h3>
  //       <p>{wine.enName}</p>
  //     </div>
  //     <div>
  //       <p>{wine.price}</p>
  //     </div>
  //     <Detail>
  //       <div>
  //         <WineTaste info={wine} />
  //       </div>
  //     </Detail>
  //     <div>
  //       <span>포도</span>
  //       <span>{wine.grape}</span>
  //     </div>
  //     <div>{wine.foodMatching?.length > 0 ? <span>어울리는 음식</span> : null}</div>
  //   </div>
  // </Info>
  // );
}

export default WineInfo;
