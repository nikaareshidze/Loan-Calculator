import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface formValuesState {
  loanAmount: number | undefined;
  loanAmountForReset: number | undefined;
  loanLengthArr: number[][];
  loanTypeArr: string[];
  loanLength: number;
  loanLengthForReset: number;
  loanType: string;
}

const initialState: formValuesState = {
  loanAmount: 5000,
  loanAmountForReset: 5000,
  loanLengthArr: [
    [5, 6, 7, 8, 9, 10],
    [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  ],
  loanTypeArr: ["იპოთეკური სესხი", "სამომხმარებლო სესხი"],
  loanLength: 5,
  loanLengthForReset: 5,
  loanType: "იპოთეკური სესხი",
};

export const formValuesSlice = createSlice({
  name: "formValues",
  initialState,
  reducers: {
    setLoanAmount: (state, action: PayloadAction<number | undefined>) => {
      state.loanAmount = action.payload;
    },
    setLoanLength: (state, action: PayloadAction<number>) => {
      state.loanLength = action.payload;
    },
    setLoanType: (state, action: PayloadAction<string>) => {
      state.loanType = action.payload;
    },
  },
});

export const { setLoanAmount, setLoanLength, setLoanType } =
  formValuesSlice.actions;

export default formValuesSlice.reducer;
