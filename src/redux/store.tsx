import { configureStore } from "@reduxjs/toolkit";

import cryptoReducer from "./features/crytpo/cryptoslice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { CryptoApi } from "../services/crypto";

export const store = configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    crypto: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CryptoApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
