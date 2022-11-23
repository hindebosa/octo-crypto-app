import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinList, TrendingCoins, SingleCoin } from "../config/api";

export const CryptoApi = createApi({
  reducerPath: "CryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/",
  }),
  endpoints: (builder) => ({
    fetchTrendingCoins: builder.query({
      query: (currency) => TrendingCoins(currency),
    }),
    fetchCoinsList: builder.query({
      query: (currency) => CoinList(currency),
    }),
    fetchSingleCoin: builder.query({
      query: (id) => SingleCoin(id),
    }),
  }),
});

export const {
  useFetchTrendingCoinsQuery,
  useFetchCoinsListQuery,
  useFetchSingleCoinQuery,
} = CryptoApi;
