import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { setLoanLength } from "../../../store/formValuesSlice";

import Input from "../../Input";
import InputTitle from "../../InputTitle";
import InputDescription from "../../InputDescription";
import OptionDiv from "./OptionDiv";

export default function LoanLength() {
  const loanLengthArr = useSelector(
    (state: RootState) => state.formValues.loanLengthArr
  );
  const loanLength = useSelector(
    (state: RootState) => state.formValues.loanLength
  );
  const loanType = useSelector((state: RootState) => state.formValues.loanType);

  const dispatch = useDispatch();

  const [optionIsShown, setOptionIsShown] = useState(false);
  //const loanLengthArr = [5, 6, 7, 8, 9, 10];
  //const [loanLength, setLoanLength] = useState(loanLengthArr[0]);
  //const optionsArr = loanLengthArr.filter((item) => item !== loanLength);

  const optionsArr =
    loanType == "იპოთეკური სესხი"
      ? loanLengthArr[0].filter((item) => item !== loanLength)
      : loanLengthArr[1].filter((item) => item !== loanLength);

  const yearOrMonth = loanType == "იპოთეკური სესხი" ? "წელი" : "თვე";

  return (
    <>
      <Input
        onClick={() => {
          setOptionIsShown(!optionIsShown);
        }}
      >
        <InputTitle>სესხის ვადა</InputTitle>
        <InputDescription>{`${loanLength} ${yearOrMonth}`}</InputDescription>
      </Input>
      {optionIsShown && (
        <>
          {optionsArr.map((item) => (
            <OptionDiv
              onClick={() => {
                dispatch(setLoanLength(item));
                setOptionIsShown(!optionIsShown);
              }}
            >
              <InputDescription>{`${item} ${yearOrMonth}`}</InputDescription>
            </OptionDiv>
          ))}
        </>
      )}
    </>
  );
}
