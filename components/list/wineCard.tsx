import { VivinoWineEntity } from "@/generated/graphql";
import { priceToString } from "@/utils/price";
import Link from "next/link";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const WineCardContainer = styled.article`
  cursor: pointer;
  background-color: transparent;
  margin-top: 48px;
  margin-bottom: 16px;
`;

const WineCardContents = styled.div`
  width: 100%;
  background-color: #333;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0 0 1px rgb(87 87 87 / 10%), 0 8px 8px 0 rgb(234 224 218 / 30%);
  & > a {
    color: #ddd;
    text-align: center;
    text-decoration: none;
  }
`;

const WineCardSection = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;
`;

const WineBottle = styled.div`
  flex: 0 0 20%;
`;
const WineInfo = styled.div`
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
`;
const WineVintage = styled.div`
  padding: 0.5rem;
  span,
  strong {
    font-size: 1.25rem;
  }
  strong {
    font-weight: bold;
  }
`;
const WineLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
`;

const WineRatingAndPrice = styled.div`
  flex: 0 0 25%;
  padding: 0 8px;
  align-self: center;
  > div {
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 1;
    padding-bottom: 24px;
  }
`;

const WineImage = styled.img`
  transition: all 0.25s ease-in-out;
  margin-top: -56px;
  height: 300px;
  content: url(${p => p.src ?? "/img/empty.png"});
`;

type CardProps = {
  data: VivinoWineEntity;
};

export default function WineCard({ data }: PropsWithChildren<CardProps>) {
  const { id, vintage, price } = data;
  const { year, image, wine, statistics } = vintage;

  return (
    <WineCardContainer>
      <WineCardContents>
        <Link href={`/detail/${id}`}>
          <WineCardSection>
            <WineBottle>
              <WineImage src={image.variations.bottleSmall ?? ""} />
            </WineBottle>
            <WineInfo>
              <WineVintage>
                <div>{wine.winery.name}</div>
                <strong>
                  {wine.name} {year}
                </strong>
              </WineVintage>
              <WineLocation>
                <span>{wine.region.country.code}</span>
                <div>
                  {wine.region.name}, {wine.region.country.name}
                </div>
              </WineLocation>
            </WineInfo>
            <WineRatingAndPrice>
              <div>{statistics.ratingsAverage}</div>
              <div>{statistics.ratingsCount} ratings</div>
              <div>{priceToString(price.amount, price.currency.prefix)}</div>
            </WineRatingAndPrice>
          </WineCardSection>
        </Link>
      </WineCardContents>
    </WineCardContainer>
  );
}
