import Image from 'next/image';
import styled from 'styled-components';

const Info = styled.div`
  display: flex;
`

const WineImg = styled.div`

`

const Category = styled.span`
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

const Circle = styled.div`
  width:18px; height: 18px; background-color: #c70039; border-radius: 100px; display: inline-block; margin-right: 9px;
  &:nth-of-type(1){ opacity: .25;}
  &:nth-of-type(2){ opacity: .4;}
  &:nth-of-type(3){ opacity: .55;}
  &:nth-of-type(4){ opacity: .75;}
`

function WineInfo(){
  return(
    <Info>
      <WineImg>
        <Image src="/img/wine.png" width={320} height={430}/>
      </WineImg>
      <div>
        <div>
          <div>
            <Category>레드</Category>
            <span>이탈리아</span>
            <span>|</span>
            <span>와이너리</span>
          </div>
          <div>

          </div>
        </div>
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
            <div>
              {
                Array.from({length: 5}).map((a,i) => {
                  return(
                      <Circle key={i}/>
                  )
                })
              }
            </div>
          </div>
          <div>
            <span>산도</span>
            <div>
              {
                Array.from({length: 5}).map((a,i) => {
                  return(
                    <Circle key={i}/>
                  )
                })
              }
            </div>
          </div>
          <div>
            <span>바디</span>
            <div>
              {
                Array.from({length: 5}).map((a,i) => {
                  return(
                    <Circle key={i}/>
                  )
                })
              }
            </div>
          </div>
          <div>
            <span>타닌</span>
            <div>
              {
                Array.from({length: 5}).map((a,i) => {
                  return(
                    <Circle key={i}/>
                  )
                })
              }
            </div>
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