import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinList, TrendingCoins } from "../config/api";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const trendingApi = createApi({
  reducerPath: "trendingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/",
  }),
  endpoints: (builder) => ({
    fetchTrendingCoins: builder.query({
      query: (currency) => TrendingCoins(currency),
    }),
  }),
});

export const coinListApi = createApi({
  reducerPath: "coinListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/",
  }),
  endpoints: (builder) => ({
    fetchCoinsList: builder.query({
      query: (currency) => CoinList(currency),
    }),
  }),
});

export const { useFetchCoinsListQuery } = coinListApi;
export const { useFetchTrendingCoinsQuery } = trendingApi;

export const { useGetPokemonByNameQuery } = pokemonApi;
