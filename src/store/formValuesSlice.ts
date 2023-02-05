import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface formValuesState {
  loanAmount: number | undefined;
}

const initialState: formValuesState = {
  loanAmount: 5000,
};

export const formValuesSlice = createSlice({
  name: "formValues",
  initialState,
  reducers: {
    setLoanAmount: (state, action: PayloadAction<number | undefined>) => {
      state.loanAmount = action.payload;
    },
  },
});

export const { setLoanAmount } = formValuesSlice.actions;

export default formValuesSlice.reducer;
