import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import cryptoReducer from "./features/crytpo/cryptoslice";

// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { coinListApi, pokemonApi, trendingApi } from "../services/crypto";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [trendingApi.reducerPath]: trendingApi.reducer,
    [coinListApi.reducerPath]: coinListApi.reducer,
    crypto: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(trendingApi.middleware)
      .concat(coinListApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
