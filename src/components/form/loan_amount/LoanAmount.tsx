import Input from "../../Input";
import InputTitle from "../../InputTitle";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { setLoanAmount } from "../../../store/formValuesSlice";

export default function LoanAmount() {
  let loanAmountRef = useRef<HTMLInputElement>(null);

  const loanAmount = useSelector(
    (state: RootState) => state.formValues.loanAmount
  );
  const dispatch = useDispatch();

  return (
    <Input>
      <InputTitle>თანხა</InputTitle>
      <input
        onChange={() => {
          dispatch(setLoanAmount(loanAmountRef.current?.valueAsNumber));
        }}
        type="number"
        style={{ outline: "none", border: "none", width: 360 }}
        defaultValue={5000}
        ref={loanAmountRef}
      />
    </Input>
  );
}
