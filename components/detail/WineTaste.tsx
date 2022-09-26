import { Wine } from "@/generated/graphql";
import styled from "styled-components";

const Taste = styled.div`
  display: inline-block;
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  background-color: white;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 100px;
  display: inline-block;
  margin-right: 9px;
  &.on {
    background-color: #c70039;
    border: 1px solid transparent;
    &:nth-of-type(1) {
      opacity: 0.25;
    }
    &:nth-of-type(2) {
      opacity: 0.4;
    }
    &:nth-of-type(3) {
      opacity: 0.55;
    }
    &:nth-of-type(4) {
      opacity: 0.75;
    }
  }
`;

type TasteProps = {
  info: Wine;
};

function WineTaste(props: TasteProps) {
  const types = ["sweet", "acidity", "tanin", "body"];
  const koTypes = { sweet: "당도", acidity: "산미", tanin: "타닌", body: "바디" };

  return (
    <div>
      {types.map((type, i) => {
        return (
          <Taste key={i}>
            {/*<span>{koTypes[type]}</span>*/}
            <div>
              {/*{Array.from({ length: 5 }).map((a, i) => {*/}
              {/*  return <Circle key={i} className={props.info && props.info[type] >= i + 1 ? 'on' : ''} />;*/}
              {/*})}*/}
            </div>
          </Taste>
        );
      })}
    </div>
  );
}

export default WineTaste;
