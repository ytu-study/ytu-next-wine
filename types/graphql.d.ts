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
  ObjectId: any;
};

export enum AcidityDescription {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium'
}

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

/** 통화 정보 */
export type Currency = {
  __typename?: 'Currency';
  /** 통화 코드 */
  code: CurrencyCode;
  /** 통화 이름 */
  name: Scalars['String'];
  /** 통화 표시 부호 */
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

/** 풍미 정보 */
export type Flavor = {
  __typename?: 'Flavor';
  /** 풍미 그룹 */
  group: Group;
  /** 일반적인 풍미 키워드 */
  primaryKeywords?: Maybe<Array<Keyword>>;
  /** 이차적인 풍미 키워드 */
  secondaryKeywords?: Maybe<Array<Keyword>>;
  /** 풍미 통계 */
  stats: FlavorStats;
};

/** 풍미 통계 정보 */
export type FlavorStats = {
  __typename?: 'FlavorStats';
  /** 풍미 수 */
  count: Scalars['Int'];
  /** 풍미 점수 */
  score: Scalars['Int'];
};

export type FluffyVariations = {
  __typename?: 'FluffyVariations';
  small: Scalars['String'];
};

export type FoodBackgroundImage = {
  __typename?: 'FoodBackgroundImage';
  /** @deprecated deprecated */
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

/** 키워드 정보 */
export type Keyword = {
  __typename?: 'Keyword';
  /** 키워드 수 */
  count: Scalars['Int'];
  /** 키워드 ID */
  id: Scalars['Int'];
  /** 키워드 이름 */
  name: Scalars['String'];
};

export type PaginatedVivinoWine = {
  __typename?: 'PaginatedVivinoWine';
  /** 현재 페이지당 보여줄 목록 수 */
  display: Scalars['Int'];
  /** 와인 정보 */
  items: Array<VivinoWineEntity>;
  /** 현재 페이지 */
  page: Scalars['Int'];
  /** 총 개수 */
  totalCount: Scalars['Int'];
};

export type PaginatedWineCountry = {
  __typename?: 'PaginatedWineCountry';
  /** 현재 페이지당 보여줄 목록 수 */
  display: Scalars['Int'];
  /** 와인 국가 */
  items: Array<WineCountryEntity>;
  /** 현재 페이지 */
  page: Scalars['Int'];
  /** 총 개수 */
  totalCount: Scalars['Int'];
};

export type PaginatedWineType = {
  __typename?: 'PaginatedWineType';
  /** 현재 페이지당 보여줄 목록 수 */
  display: Scalars['Int'];
  /** 와인 타입 */
  items: Array<WineTypeEntity>;
  /** 현재 페이지 */
  page: Scalars['Int'];
  /** 총 개수 */
  totalCount: Scalars['Int'];
};

export type PaginationWineFood = {
  __typename?: 'PaginationWineFood';
  /** 현재 페이지당 보여줄 목록 수 */
  display: Scalars['Int'];
  /** 와인과 어울리는 음식 */
  items: Array<WineFoodEntity>;
  /** 현재 페이지 */
  page: Scalars['Int'];
  /** 총 개수 */
  totalCount: Scalars['Int'];
};

export type PaginationWineGrape = {
  __typename?: 'PaginationWineGrape';
  /** 현재 페이지당 보여줄 목록 수 */
  display: Scalars['Int'];
  /** 와인 포도 품종 */
  items: Array<WineGrapeEntity>;
  /** 현재 페이지 */
  page: Scalars['Int'];
  /** 총 개수 */
  totalCount: Scalars['Int'];
};

export type Price = {
  __typename?: 'Price';
  /** 가격 */
  amount: Scalars['Float'];
  /** 병 유형 */
  bottleType: BottleType;
  bottleTypeId: Scalars['Int'];
  /** 통화 */
  currency: Currency;
  /** 가격 ID */
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
  getVivinoWine: VivinoWineEntity;
  /** 와인 목록 조회 */
  getVivinoWines: PaginatedVivinoWine;
  /** 와인 상세목록 조회 */
  getWine: Wine;
  /** 와인 국가 목록 조회 */
  getWineCountries: PaginatedWineCountry;
  /** 와인 국가 상세목록 조회 */
  getWineCountry: WineCountryEntity;
  /** 와인과 어울리는 음식 상세목록 조회 */
  getWineFood: WineFoodEntity;
  /** 와인과 어울리는 음식 목록 조회 */
  getWineFoods: PaginationWineFood;
  /** 와인 포도 품종 상세목록 조회 */
  getWineGrape: WineGrapeEntity;
  /** 와인 포도 품종 목록 조회 */
  getWineGrapes: PaginationWineGrape;
  /** 모든 와인 아이디 조회 */
  getWineIds: Array<Scalars['String']>;
  /** 와인 타입 상세목록 조회 */
  getWineType?: Maybe<WineTypeEntity>;
  /** 와인 타입 목록 조회 */
  getWineTypes: PaginatedWineType;
  /** 와인 목록 조회 */
  getWines: Array<Wine>;
};


export type QueryGetVivinoWineArgs = {
  id: Scalars['ObjectId'];
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
  id: Scalars['ObjectId'];
};


export type QueryGetWineFoodArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetWineFoodsArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWineGrapeArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetWineGrapesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWineTypeArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetWineTypesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetWinesArgs = {
  display?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** 와인 지역 정보 */
export type Region = {
  __typename?: 'Region';
  /** 와인 지역 이미지 */
  backgroundImage?: Maybe<RegionBackgroundImage>;
  /** 와인 국가 */
  country: WineCountry;
  /** 와인 지역 ID */
  id: Scalars['Int'];
  /** 와인 지역 이름 */
  name: Scalars['String'];
  /** 와인 지역 이름 */
  nameEn: Scalars['String'];
  /** @deprecated deprecated */
  parentId?: Maybe<Scalars['Int']>;
  /** 와인 지역 이름(kebab-case) */
  seoName: Scalars['String'];
  /** @deprecated deprecated */
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

/** 와인 맛 정보 */
export type Taste = {
  __typename?: 'Taste';
  /** 와인 풍미 */
  flavor: Array<Flavor>;
  /** 와인 맛 구조 */
  structure?: Maybe<TasteStructure>;
};

/** 와인 맛 정보 */
export type TasteStructure = {
  __typename?: 'TasteStructure';
  /** 산도 */
  acidity: Scalars['Float'];
  calculatedStructureCount: Scalars['Int'];
  /** 탄산 */
  fizziness?: Maybe<Scalars['Float']>;
  /** 고유한 맛의 강도 */
  intensity: Scalars['Float'];
  /** 당도 */
  sweetness?: Maybe<Scalars['Float']>;
  /** 탄닌 */
  tannin?: Maybe<Scalars['Float']>;
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

/** 와인 빈티지 정보 */
export type Vintage = {
  __typename?: 'Vintage';
  /** @deprecated deprecated */
  hasValidRatings: Scalars['Boolean'];
  /** 빈티지 ID */
  id: Scalars['Int'];
  /** 와인 이미지 */
  image: VintageImage;
  /** 와이너리 + 와인 + 빈티지연도 이름 */
  name: Scalars['String'];
  /** 와이너리 + 와인 + 빈티지 이름(kebab-case) */
  seoName: Scalars['String'];
  /** 와인 통계 */
  statistics: VintageStatistics;
  /** @deprecated deprecated */
  topListRankings?: Maybe<Array<TopListRanking>>;
  /** 와인 */
  wine: VintageWine;
  /** 빈티지 연도 */
  year: Scalars['String'];
};

export type VintageImage = {
  __typename?: 'VintageImage';
  location: Scalars['String'];
  variations: ImageVariations;
};

/** 와인 통계 정보 */
export type VintageStatistics = {
  __typename?: 'VintageStatistics';
  /** ??? */
  labelsCount: Scalars['Int'];
  /** 평점 */
  ratingsAverage: Scalars['Float'];
  /** 평점 수 */
  ratingsCount: Scalars['Int'];
  /** ??? */
  status: Scalars['String'];
  /** ??? */
  wineRatingsAverage: Scalars['Float'];
  /** ??? */
  wineRatingsCount: Scalars['Int'];
  /** ??? */
  wineStatus: Scalars['String'];
};

/** 와인 정보 */
export type VintageWine = {
  __typename?: 'VintageWine';
  /** @deprecated deprecated */
  hasValidRatings: Scalars['Boolean'];
  /** 와인 ID */
  id: Scalars['Int'];
  /** 천연 와인 여부 */
  isNatural: Scalars['Boolean'];
  /** 와인 이름 */
  name: Scalars['String'];
  /** 와인 생산 지역 */
  region: Region;
  /** 와인 이름(kebab-case) */
  seoName: Scalars['String'];
  /** 와인 통계 */
  statistics: WineStatistics;
  /** 와인 스타일 */
  style?: Maybe<WineStyle>;
  /** 와인 맛 */
  taste: Taste;
  /** 와인 타입 ID */
  typeId: Scalars['Int'];
  /** ??? */
  vintageType: Scalars['Int'];
  /** 와이너리 */
  winery: Winery;
};

/** 와인 정보 */
export type VivinoWineEntity = {
  __typename?: 'VivinoWineEntity';
  /** objectId */
  id: Scalars['ID'];
  /** 와인 가격 */
  price: Price;
  /** 와인 빈티지 */
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

/** 와인 국가 정보 */
export type WineCountry = {
  __typename?: 'WineCountry';
  /** 국가 코드 */
  code: Scalars['String'];
  /** 통화 */
  currency: Currency;
  /** 가장 많이 사용하는 포도 품종 */
  mostUsedGrapes: Array<WineGrape>;
  /** 국가 이름 */
  name: Scalars['String'];
  /** 국가 이름(국가 언어) */
  nativeName: Scalars['String'];
  /** 국가 조회수 */
  regionsCount: Scalars['Int'];
  /** 국가 이름(kebab-case) */
  seoName: Scalars['String'];
  usersCount: Scalars['Int'];
  wineriesCount: Scalars['Int'];
  winesCount: Scalars['Int'];
};

/** 와인 국가 */
export type WineCountryEntity = {
  __typename?: 'WineCountryEntity';
  /** 국가 코드 */
  code: Scalars['String'];
  /** 통화 */
  currency: Currency;
  /** objectId */
  id: Scalars['ID'];
  /** 가장 많이 사용하는 포도 품종 */
  mostUsedGrapes: Array<WineGrape>;
  /** 국가 이름 */
  name: Scalars['String'];
  /** 국가 이름(국가 언어) */
  nativeName: Scalars['String'];
  /** 국가 조회수 */
  regionsCount: Scalars['Int'];
  /** 국가 이름(kebab-case) */
  seoName: Scalars['String'];
  usersCount: Scalars['Int'];
  wineriesCount: Scalars['Int'];
  winesCount: Scalars['Int'];
};

/** 와인과 어울리는 음식 */
export type WineFood = {
  __typename?: 'WineFood';
  /** 음식 이미지 */
  backgroundImage: FoodBackgroundImage;
  /** 음식 ID */
  id: Scalars['Int'];
  /** 음식 이름 */
  name: Scalars['String'];
};

/** 와인과 어울리는 음식 */
export type WineFoodEntity = {
  __typename?: 'WineFoodEntity';
  /** 음식 이미지 */
  backgroundImage: FoodBackgroundImage;
  /** 음식 ID */
  foodId: Scalars['Int'];
  /** objectId */
  id: Scalars['ID'];
  /** 음식 이름 */
  name: Scalars['String'];
};

/** 와인 포도 품종 */
export type WineGrape = {
  __typename?: 'WineGrape';
  /** @deprecated deprecated */
  hasDetailedInfo: Scalars['Int'];
  /** 포도 ID */
  id: Scalars['Int'];
  /** 포도 이름 */
  name: Scalars['String'];
  /** 포도 이름(kebab-case) */
  seoName: Scalars['String'];
  /** 포도 조회수 */
  winesCount: Scalars['Int'];
};

/** 와인 포도 품종 */
export type WineGrapeEntity = {
  __typename?: 'WineGrapeEntity';
  /** 포도 ID */
  grapeId: Scalars['Int'];
  /** @deprecated deprecated */
  hasDetailedInfo: Scalars['Int'];
  /** objectId */
  id: Scalars['ID'];
  /** 포도 이름 */
  name: Scalars['String'];
  /** 포도 이름(kebab-case) */
  seoName: Scalars['String'];
  /** 포도 조회수 */
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

/** 와인 스타일 정보 */
export type WineStyle = {
  __typename?: 'WineStyle';
  /** 산도 */
  acidity: Scalars['Int'];
  /** 산도(High, Medium, Low) */
  acidityDescription: AcidityDescription;
  backgroundImage?: Maybe<StyleBackgroundImage>;
  /** 와인에 대한 짧은 광고 */
  blurb?: Maybe<Scalars['String']>;
  /** 바디감 */
  body: Scalars['Int'];
  /** 바디감(Full-bodied, Light-bodied, Medium-bodied, Very full-bodied */
  bodyDescription: BodyDescription;
  /** 와인 국가 */
  country: WineCountryEntity;
  /** 와인 스타일 설명 */
  description?: Maybe<Scalars['String']>;
  /** 와인과 어울리는 음식 */
  food?: Maybe<Array<WineFood>>;
  /** 와인 포도 품종 */
  grapes: Array<WineGrape>;
  /** 와인 스타일 ID */
  id: Scalars['Int'];
  /** 흥미로운 사실 */
  interestingFacts?: Maybe<Array<Scalars['String']>>;
  /** 와인 스타일 */
  name: Scalars['String'];
  /** 와인 지역 */
  region?: Maybe<Region>;
  /** 지역명 */
  regionalName: Scalars['String'];
  /** 와인 스타일(kebab-case) */
  seoName: Scalars['String'];
  /** 버라이어털(포도 품종 이름으로 딴 와인) 이름 */
  varietalName: Scalars['String'];
  /** 와인 타입 ID */
  wineTypeId: Scalars['Int'];
};

/** 와인 타입 */
export type WineTypeEntity = {
  __typename?: 'WineTypeEntity';
  /** objectId */
  id: Scalars['ID'];
  /** 와인 타입 이름 */
  name: Scalars['String'];
  /** 와인 타입 ID */
  typeId: Scalars['Int'];
  /** 와인 타입 조회수 */
  winesCount: Scalars['Int'];
};

/** 와이너리 정보 */
export type Winery = {
  __typename?: 'Winery';
  /** 와이너리 이미지 */
  backgroundImage?: Maybe<WineryBackgroundImage>;
  /** 와이너리 ID */
  id: Scalars['Int'];
  /** 와이너리 이름 */
  name: Scalars['String'];
  /** 와이너리 이름(kebab-case) */
  seoName: Scalars['String'];
  /** @deprecated deprecated */
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
