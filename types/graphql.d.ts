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

export enum AcidityDescription {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium'
}

export type AryKeyword = {
  __typename?: 'AryKeyword';
  count: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum BodyDescription {
  FullBodied = 'FullBodied',
  LightBodied = 'LightBodied',
  MediumBodied = 'MediumBodied',
  VeryFullBodied = 'VeryFullBodied'
}

export type BottleType = {
  __typename?: 'BottleType';
  id: Scalars['Int'];
  name: Scalars['String'];
  shortName: Scalars['String'];
  shortNamePlural: Scalars['String'];
  volumeMl: Scalars['Int'];
};

export type Currency = {
  __typename?: 'Currency';
  code: CurrencyCode;
  name: Scalars['String'];
  prefix?: Maybe<Scalars['String']>;
  /** @deprecated deprecated */
  suffix?: Maybe<Scalars['String']>;
};

export enum CurrencyCode {
  Ars = 'Ars',
  Aud = 'Aud',
  Clp = 'Clp',
  Eur = 'Eur',
  Krw = 'Krw',
  Usd = 'Usd',
  Zar = 'Zar'
}

export type Flavor = {
  __typename?: 'Flavor';
  group: Group;
  primaryKeywords?: Maybe<Array<AryKeyword>>;
  secondaryKeywords?: Maybe<Array<AryKeyword>>;
  stats: FlavorStats;
};

export type FlavorStats = {
  __typename?: 'FlavorStats';
  count: Scalars['Int'];
  score: Scalars['Int'];
};

export type FluffyVariations = {
  __typename?: 'FluffyVariations';
  small: Scalars['String'];
};

export type FoodBackgroundImage = {
  __typename?: 'FoodBackgroundImage';
  location: Scalars['String'];
  variations: FoodVariations;
};

export type FoodVariations = {
  __typename?: 'FoodVariations';
  small: Scalars['String'];
};

export enum Group {
  BlackFruit = 'BlackFruit',
  CitrusFruit = 'CitrusFruit',
  DriedFruit = 'DriedFruit',
  Earth = 'Earth',
  Floral = 'Floral',
  Microbio = 'Microbio',
  NonOak = 'NonOak',
  Oak = 'Oak',
  RedFruit = 'RedFruit',
  Spices = 'Spices',
  TreeFruit = 'TreeFruit',
  TropicalFruit = 'TropicalFruit',
  Vegetal = 'Vegetal'
}

export type ImageVariations = {
  __typename?: 'ImageVariations';
  bottleLarge?: Maybe<Scalars['String']>;
  bottleMedium?: Maybe<Scalars['String']>;
  bottleMediumSquare?: Maybe<Scalars['String']>;
  bottleSmall?: Maybe<Scalars['String']>;
  bottleSmallSquare?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  labelLarge?: Maybe<Scalars['String']>;
  labelMedium?: Maybe<Scalars['String']>;
  labelMediumSquare?: Maybe<Scalars['String']>;
  labelSmallSquare?: Maybe<Scalars['String']>;
  large: Scalars['String'];
  medium: Scalars['String'];
  mediumSquare: Scalars['String'];
  smallSquare: Scalars['String'];
};

export type PaginationItems = {
  display: Scalars['Float'];
  page: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type PaginationVivinoWine = PaginationItems & {
  __typename?: 'PaginationVivinoWine';
  display: Scalars['Float'];
  items: Array<Maybe<VivinoWine>>;
  page: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type PaginationWineCountry = PaginationItems & {
  __typename?: 'PaginationWineCountry';
  display: Scalars['Float'];
  items: Array<Maybe<WineCountry>>;
  page: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type PaginationWineFood = PaginationItems & {
  __typename?: 'PaginationWineFood';
  display: Scalars['Float'];
  items: Array<Maybe<WineFood>>;
  page: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type PaginationWineGrape = PaginationItems & {
  __typename?: 'PaginationWineGrape';
  display: Scalars['Float'];
  items: Array<Maybe<WineGrape>>;
  page: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type PaginationWineType = PaginationItems & {
  __typename?: 'PaginationWineType';
  display: Scalars['Float'];
  items: Array<Maybe<WineType>>;
  page: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float'];
  bottleType: BottleType;
  bottleTypeId: Scalars['Int'];
  currency: Currency;
  id: Scalars['Int'];
  sku: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
  visibility: Scalars['Int'];
};

export type PurpleVariations = {
  __typename?: 'PurpleVariations';
  large: Scalars['String'];
  medium: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** 와인 상세목록 조회 */
  getVivinoWine: VivinoWine;
  /** 와인 목록 조회 */
  getVivinoWines: PaginationVivinoWine;
  /** 와인 상세목록 조회 */
  getWine: Wine;
  /** 와인 국가 목록 조회 */
  getWineCountries: PaginationWineCountry;
  /** 와인 국가 상세목록 조회 */
  getWineCountry: WineCountry;
  /** 와인과 어울리는 음식 상세목록 조회 */
  getWineFood: WineFood;
  /** 와인과 어울리는 음식 목록 조회 */
  getWineFoods: PaginationWineFood;
  /** 와인 포도 품종 상세목록 조회 */
  getWineGrape: WineGrape;
  /** 와인 포도 품종 목록 조회 */
  getWineGrapes: PaginationWineGrape;
  /** 모든 와인 아이디 조회 */
  getWineIds: Array<Scalars['String']>;
  /** 와인 타입 상세목록 조회 */
  getWineType?: Maybe<WineType>;
  /** 와인 타입 목록 조회 */
  getWineTypes: PaginationWineType;
  /** 와인 목록 조회 */
  getWines: Array<Wine>;
};


export type QueryGetVivinoWineArgs = {
  id: Scalars['ID'];
};


export type QueryGetVivinoWinesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWineArgs = {
  id: Scalars['String'];
};


export type QueryGetWineCountriesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWineCountryArgs = {
  id: Scalars['ID'];
};


export type QueryGetWineFoodArgs = {
  id: Scalars['ID'];
};


export type QueryGetWineFoodsArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWineGrapeArgs = {
  id: Scalars['ID'];
};


export type QueryGetWineGrapesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWineTypeArgs = {
  id: Scalars['ID'];
};


export type QueryGetWineTypesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWinesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Region = {
  __typename?: 'Region';
  backgroundImage?: Maybe<RegionBackgroundImage>;
  /** @deprecated deprecated */
  class: Scalars['String'];
  country: WineCountry;
  id: Scalars['Int'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  seoName: Scalars['String'];
  statistics?: Maybe<RegionStatistics>;
};

export type RegionBackgroundImage = {
  __typename?: 'RegionBackgroundImage';
  location: Scalars['String'];
  variations: PurpleVariations;
};

export type RegionStatistics = {
  __typename?: 'RegionStatistics';
  parentRegionsCount: Scalars['Int'];
  subRegionsCount: Scalars['Int'];
  wineriesCount: Scalars['Int'];
  winesCount: Scalars['Int'];
};

export type StyleBackgroundImage = {
  __typename?: 'StyleBackgroundImage';
  location: Scalars['String'];
  variations: FluffyVariations;
};

export type Taste = {
  __typename?: 'Taste';
  flavor: Array<Flavor>;
  structure?: Maybe<TasteStructure>;
};

export type TasteStructure = {
  __typename?: 'TasteStructure';
  acidity: Scalars['Int'];
  calculatedStructureCount: Scalars['Int'];
  fizziness?: Maybe<Scalars['Int']>;
  intensity: Scalars['Int'];
  sweetness?: Maybe<Scalars['Int']>;
  tannin?: Maybe<Scalars['Int']>;
  userStructureCount: Scalars['Int'];
};

export type TentacledVariations = {
  __typename?: 'TentacledVariations';
  large: Scalars['String'];
  medium: Scalars['String'];
  small: Scalars['String'];
};

export type TopList = {
  __typename?: 'TopList';
  id: Scalars['Int'];
  location: Scalars['String'];
  name: Scalars['String'];
  seoName: Scalars['String'];
  type: Scalars['Int'];
  year: Scalars['String'];
};

export type TopListRanking = {
  __typename?: 'TopListRanking';
  description?: Maybe<Scalars['String']>;
  previousRank: Scalars['Int'];
  rank: Scalars['Int'];
  topList: TopList;
};

export type Vintage = {
  __typename?: 'Vintage';
  hasValidRatings: Scalars['Boolean'];
  id: Scalars['Int'];
  image: VintageImage;
  name: Scalars['String'];
  seoName: Scalars['String'];
  statistics: VintageStatistics;
  topListRankings?: Maybe<Array<TopListRanking>>;
  wine: VintageWine;
  year: Scalars['String'];
};

export type VintageImage = {
  __typename?: 'VintageImage';
  location: Scalars['String'];
  variations: ImageVariations;
};

export type VintageStatistics = {
  __typename?: 'VintageStatistics';
  labelsCount: Scalars['Int'];
  ratingsAverage: Scalars['Float'];
  ratingsCount: Scalars['Int'];
  status: Scalars['String'];
  wineRatingsAverage: Scalars['Float'];
  wineRatingsCount: Scalars['Int'];
  wineStatus: Scalars['String'];
};

export type VintageWine = {
  __typename?: 'VintageWine';
  hasValidRatings: Scalars['Boolean'];
  id: Scalars['Int'];
  isNatural: Scalars['Boolean'];
  name: Scalars['String'];
  region: Region;
  seoName: Scalars['String'];
  statistics: WineStatistics;
  style?: Maybe<WineStyle>;
  taste: Taste;
  typeId: Scalars['Int'];
  vintageType: Scalars['Int'];
  winery: Winery;
};

/** 와인 정보 */
export type VivinoWine = {
  __typename?: 'VivinoWine';
  /** objectId */
  _id: Scalars['ID'];
  price: Price;
  vintage: Vintage;
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

/** 와인 국가 */
export type WineCountry = {
  __typename?: 'WineCountry';
  /** objectId */
  _id: Scalars['ID'];
  code: Scalars['String'];
  currency: Currency;
  mostUsedGrapes: Array<WineGrape>;
  name: Scalars['String'];
  nativeName: Scalars['String'];
  regionsCount: Scalars['Int'];
  seoName: Scalars['String'];
  usersCount: Scalars['Int'];
  wineriesCount: Scalars['Int'];
  winesCount: Scalars['Int'];
};

/** 와인과 어울리는 음식 */
export type WineFood = {
  __typename?: 'WineFood';
  /** objectId */
  _id: Scalars['ID'];
  backgroundImage: FoodBackgroundImage;
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** 와인 포도 품종 */
export type WineGrape = {
  __typename?: 'WineGrape';
  /** objectId */
  _id: Scalars['ID'];
  hasDetailedInfo: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  seoName: Scalars['String'];
  winesCount: Scalars['Int'];
};

export type WineStatistics = {
  __typename?: 'WineStatistics';
  labelsCount: Scalars['Int'];
  ratingsAverage: Scalars['Float'];
  ratingsCount: Scalars['Int'];
  status: Scalars['String'];
  vintagesCount: Scalars['Int'];
};

export type WineStyle = {
  __typename?: 'WineStyle';
  acidity: Scalars['Int'];
  acidityDescription: AcidityDescription;
  backgroundImage?: Maybe<StyleBackgroundImage>;
  blurb?: Maybe<Scalars['String']>;
  body: Scalars['Int'];
  bodyDescription: BodyDescription;
  country: WineCountry;
  description?: Maybe<Scalars['String']>;
  food?: Maybe<Array<WineFood>>;
  grapes: Array<WineGrape>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  interestingFacts?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  region?: Maybe<Region>;
  regionalName: Scalars['String'];
  seoName: Scalars['String'];
  varietalName: Scalars['String'];
  wineTypeId: Scalars['Int'];
};

/** 와인 타입 */
export type WineType = {
  __typename?: 'WineType';
  /** objectId */
  _id: Scalars['ID'];
  id: Scalars['Int'];
  name: Scalars['String'];
  winesCount: Scalars['Int'];
};

export type Winery = {
  __typename?: 'Winery';
  backgroundImage?: Maybe<WineryBackgroundImage>;
  id: Scalars['Int'];
  name: Scalars['String'];
  seoName: Scalars['String'];
  status: Scalars['Int'];
};

export type WineryBackgroundImage = {
  __typename?: 'WineryBackgroundImage';
  location: Scalars['String'];
  variations: TentacledVariations;
};

export type Unnamed_1_QueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type Unnamed_1_Query = { __typename?: 'Query', getWine: { __typename?: 'Wine', _id: string, name: string, enName: string, image: string, category: string, country: string, grape: string, price?: number | null, sweet: number, body: number, acidity: number, tanin: number, winery: string, foodMatching?: Array<string> | null } };

export type Unnamed_2_QueryVariables = Exact<{
  display?: InputMaybe<Scalars['Int']>;
}>;


export type Unnamed_2_Query = { __typename?: 'Query', getWines: Array<{ __typename?: 'Wine', _id: string, name: string, enName: string, image: string, category: string, country: string, grape: string, price?: number | null, sweet: number, body: number, acidity: number, tanin: number, winery: string, foodMatching?: Array<string> | null }> };
