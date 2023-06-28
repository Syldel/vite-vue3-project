export interface ICryptoSearchResult {
  categories: any[]
  coins: ICryptoCoin[]
  exchanges: any[]
  icos: any[]
  ntfs: any[]
}

export interface ICryptoCoin {
  id: string
  name: string
  api_symbol: string
  symbol: string
  market_cap_rank: number
  thumb: string
  large: string
}
