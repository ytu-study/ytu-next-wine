import Image from 'next/image';
import styled from 'styled-components';

const Info = styled.div`
  display: flex;
`

const WineImg = styled.div`

`

const Detail = styled.div`
  >div{
    display: inline-block;
  }
`

function WineInfo(){
  return(
    <Info>
      <WineImg>
        <Image src="/img/wine.png" width={320} height={430}/>
      </WineImg>
      <div>
        <div>
          <h3>와인이름</h3>
          <p>와인 영어이름</p>
        </div>
        <div>
          <p>가격 정보</p>
        </div>
        <Detail>
          <div>
            <span>당도</span>
          </div>
          <div>
            <span>산도</span>
          </div>
          <div>
            <span>바디</span>
          </div>
          <div>
            <span>타닌</span>
          </div>
        </Detail>
      </div>
    </Info>
  )
}

export default WineInfo;