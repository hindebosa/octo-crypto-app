import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  currency: string;
}

const initialState: CounterState = {
  currency: "zar",
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrency } = cryptoSlice.actions;

export default cryptoSlice.reducer;
