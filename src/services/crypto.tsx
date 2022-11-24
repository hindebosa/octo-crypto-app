import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CoinList,
  TrendingCoins,
  SingleCoin,
  HistoricalChart,
} from "../config/api";
import { Coins, CoinType, History } from "../types";

const REACT_APP_COINGECKO_API_URL = process.env.REACT_APP_COINGECKO_API_URL;

export const CryptoApi = createApi({
  reducerPath: "CryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${REACT_APP_COINGECKO_API_URL}`,
  }),
  endpoints: (builder) => ({
    fetchTrendingCoins: builder.query<Coins[], string>({
      query: (currency) => TrendingCoins(currency),
    }),
    fetchCoinsList: builder.query<Coins[], string>({
      query: (currency) => CoinList(currency),
    }),
    fetchSingleCoin: builder.query<CoinType, string>({
      query: (id) => SingleCoin(id),
    }),
    fetchHistoryOfCoins: builder.query<
      History,
      { id: string; days: number; currency: string }
    >({
      query: ({ id, days, currency }) => HistoricalChart(id, days, currency),
    }),
  }),
});

export const {
  useFetchTrendingCoinsQuery,
  useFetchCoinsListQuery,
  useFetchSingleCoinQuery,
  useFetchHistoryOfCoinsQuery,
} = CryptoApi;
