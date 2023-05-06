import { createSlice } from "@reduxjs/toolkit";

export interface formValuesState {
  loanAmount: 50000 | 500000 | 1000000 | 20000000;
  loanLength: 5 | 10 | 15 | 20;
  loanType: "Mortgage Loan" | "Consumer Loan";
  loanProperty: "Basic" | "Startup" | "Premium" | "Pro";
}

const initialState: formValuesState = {
  loanAmount: 50000,
  loanLength: 5,
  loanType: "Mortgage Loan",
  loanProperty: "Basic",
};

export const formValuesSlice = createSlice({
  name: "formValues",
  initialState,
  reducers: {
    setLoanAmount: (state, action) => {
      state.loanAmount = action.payload;
    },
    setLoanLength: (state, action) => {
      state.loanLength = action.payload;
    },
    setLoanType: (state, action) => {
      state.loanType = action.payload;
    },
    setLoanProperty: (state, action) => {
      state.loanProperty = action.payload;
    },
  },
});

export const { setLoanAmount, setLoanLength, setLoanType, setLoanProperty } =
  formValuesSlice.actions;

export default formValuesSlice.reducer;
