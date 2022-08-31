export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** 와인 목록 조회 */
  getWines: Array<Wine>;
};


export type QueryGetWinesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** 와인 정보 */
export type Wine = {
  __typename?: 'Wine';
  /** uuid */
  _id: Scalars['String'];
  /** 와인 산도 */
  acidity: Scalars['Int'];
  /** 와인 알콜 */
  alcohol: Array<Scalars['Float']>;
  /** 와인 생산 지역 */
  area: Scalars['String'];
  /** 와인 바디감 */
  body: Scalars['Int'];
  /** 와인 종류 */
  category: Scalars['String'];
  /** 와인 생산 국가 */
  country: Scalars['String'];
  /** 와인 영문 이름 */
  enName: Scalars['String'];
  /** 와인과 어울리는 음식 */
  foodMatching?: Maybe<Array<Scalars['String']>>;
  /** 포도 품종 */
  grape: Scalars['String'];
  /** 와인 이미지 */
  image: Scalars['String'];
  /** 와인 이름 */
  name: Scalars['String'];
  /** 와인 가격 */
  price?: Maybe<Scalars['Int']>;
  /** 와인 당도 */
  sweet: Scalars['Int'];
  /** 와인 탄닌 함량 */
  tanin: Scalars['Int'];
  /** 와인 빈티지 연도 */
  vintage?: Maybe<Scalars['Int']>;
  /** 와이너리 */
  winery: Scalars['String'];
};

export type Unnamed_1_QueryVariables = Exact<{
  display?: InputMaybe<Scalars['Int']>;
}>;


export type Unnamed_1_Query = { __typename?: 'Query', getWines: Array<{ __typename?: 'Wine', _id: string, name: string, enName: string, image: string, category: string, country: string, grape: string, price?: number | null, sweet: number, body: number, tanin: number, winery: string, foodMatching?: Array<string> | null }> };
