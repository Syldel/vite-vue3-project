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

export interface ICryptoTicker {
  base: string
  target: string
  market: {
    name: string
    identifier: string
    has_trading_incentive: boolean
  }
  last: number
  volume: number
  converted_last: {
    btc: number
    eth: number
    usd: number
  }
  converted_volume: {
    btc: number
    eth: number
    usd: number
  }
  trust_score: string // probably an enum => green
  bid_ask_spread_percentage: number
  timestamp: string // date format 2023-06-29T12:56:33+00:00
  last_traded_at: string // date format 2023-06-29T12:56:33+00:00
  last_fetch_at: string // date format 2023-06-29T12:56:33+00:00
  is_anomaly: boolean
  is_stale: boolean
  trade_url: string
  token_info_url: string
  coin_id: string
}

interface ICryptoCurrencyValue {
  btc: number
  eth: number
  eur: number
  usd: number
}

interface ICryptoCurrencyDate {
  btc: string
  eth: string
  eur: string
  usd: string
}

export interface ICryptoCoinDetail {
  id: string
  symbol: string
  name: string
  hashing_algorithm: string
  categories: string[]
  localization: { [key: string]: string }
  description: { [key: string]: string }
  links: {
    homepage: string[]
    blockchain_site: string[]
    chat_url: string[]
    twitter_screen_name: string
    facebook_username: string
    telegram_channel_identifier: string
    repos_url: {
      github: string[]
      bitbucket: string[]
    }
  }
  image: {
    thumb: string
    small: string
    large: string
  }
  country_origin: string
  genesis_date: string // date format "2015-07-30"
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  ico_data: any
  watchlist_portfolio_users: number
  market_cap_rank: number
  coingecko_rank: number
  coingecko_score: number
  developer_score: number
  community_score: number
  liquidity_score: number
  public_interest_score: number
  market_data: {
    current_price: ICryptoCurrencyValue
    roi: {
      times: number
      currency: string
      percentage: number
    }
    ath: ICryptoCurrencyValue
    ath_change_percentage: ICryptoCurrencyValue
    ath_date: ICryptoCurrencyDate
    atl: ICryptoCurrencyValue
    atl_change_percentage: ICryptoCurrencyValue
    atl_date: ICryptoCurrencyDate
    market_cap: ICryptoCurrencyValue
    market_cap_rank: number
    fully_diluted_valuation: ICryptoCurrencyValue
    total_volume: ICryptoCurrencyValue
    high_24h: ICryptoCurrencyValue
    low_24h: ICryptoCurrencyValue
    price_change_24h: number
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_14d: number
    price_change_percentage_30d: number
    price_change_percentage_60d: number
    price_change_percentage_200d: number
    price_change_percentage_1y: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    price_change_24h_in_currency: ICryptoCurrencyValue
    price_change_percentage_1h_in_currency: ICryptoCurrencyValue
    price_change_percentage_24h_in_currency: ICryptoCurrencyValue
    price_change_percentage_7d_in_currency: ICryptoCurrencyValue
    price_change_percentage_14d_in_currency: ICryptoCurrencyValue
    price_change_percentage_30d_in_currency: ICryptoCurrencyValue
    price_change_percentage_60d_in_currency: ICryptoCurrencyValue
    price_change_percentage_200d_in_currency: ICryptoCurrencyValue
    price_change_percentage_1y_in_currency: ICryptoCurrencyValue
    market_cap_change_24h_in_currency: ICryptoCurrencyValue
    market_cap_change_percentage_24h_in_currency: ICryptoCurrencyValue
    total_supply: number
    max_supply: number
    circulating_supply: number
    last_updated: string // date format 2023-06-29T12:59:31.895Z
  }
  community_data: {
    facebook_likes: number
    twitter_followers: number
    reddit_average_posts_48h: number
    reddit_average_comments_48h: number
    reddit_subscribers: number
    reddit_accounts_active_48h: number
    telegram_channel_user_count: number
  }
  developer_data: {
    forks: number
    stars: number
    subscribers: number
    total_issues: number
    closed_issues: number
    pull_requests_merged: number
    pull_request_contributors: number
    code_additions_deletions_4_weeks: {
      additions: number
      deletions: number
    }
    commit_count_4_weeks: number
    last_4_weeks_commit_activity_series: number[]
  }
  public_interest_stats: {
    alexa_rank: number
  }
  status_updates: any[]
  last_updated: string // date format 2023-06-29T12:59:31.895Z
  tickers: ICryptoTicker[]
}
