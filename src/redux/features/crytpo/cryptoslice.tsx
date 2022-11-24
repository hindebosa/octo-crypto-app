import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  currency: string;
  days: number;
}

const initialState: CounterState = {
  currency: "zar",
  days: 1,
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
    changeDays: (state, action) => {
      state.days = action.payload;
    },
  },
});

export const { changeCurrency, changeDays } = cryptoSlice.actions;

export default cryptoSlice.reducer;
