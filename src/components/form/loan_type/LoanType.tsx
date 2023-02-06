import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import {
  setLoanType,
  setLoanLength,
  setLoanAmount,
} from "../../../store/formValuesSlice";

import Input from "../../Input";
import InputTitle from "../../InputTitle";
import InputDescription from "../../InputDescription";

export default function LoanType() {
  const loanTypeArr = useSelector(
    (state: RootState) => state.formValues.loanTypeArr
  );
  const loanType = useSelector((state: RootState) => state.formValues.loanType);
  const loanLengthForReset = useSelector(
    (state: RootState) => state.formValues.loanLengthForReset
  );
  const loanAmountForReset = useSelector(
    (state: RootState) => state.formValues.loanAmountForReset
  );

  const dispatch = useDispatch();

  //const loanTypeArr = ["იპოთეკური სესხი", "სამომხმარებლო სესხი"];
  //const [loanType, setLoanType] = useState(loanTypeArr[0]);
  const [optionIsShown, setOptionIsShown] = useState(false);

  return (
    <>
      <Input
        onClick={() => {
          setOptionIsShown(!optionIsShown);
        }}
      >
        <InputTitle>სესხის ტიპი</InputTitle>
        <InputDescription>{loanType}</InputDescription>
      </Input>
      {optionIsShown && (
        <div
          style={{
            width: 408,
            height: 56,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#d5d5d5",
            borderRadius: 8,
            cursor: "pointer",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
          }}
          onClick={() => {
            loanType == loanTypeArr[0]
              ? dispatch(setLoanType(loanTypeArr[1]))
              : dispatch(setLoanType(loanTypeArr[0]));

            setOptionIsShown(!optionIsShown);
            dispatch(setLoanLength(loanLengthForReset));
            dispatch(setLoanAmount(loanAmountForReset));
          }}
        >
          <h1
            style={{ fontSize: 14, fontWeight: 400, backgroundColor: "white" }}
          >
            {loanType == loanTypeArr[0] ? loanTypeArr[1] : loanTypeArr[0]}
          </h1>
        </div>
      )}
    </>
  );
}
