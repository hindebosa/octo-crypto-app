export const CoinList = (currency: string) =>
  `markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id: string) => `${id}`;

export const HistoricalChart = (id: string, days = 365, currency: string) =>
  `${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency: string) =>
  `markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
