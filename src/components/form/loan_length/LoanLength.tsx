import { useState } from "react";

import Input from "../../Input";
import InputTitle from "../../InputTitle";
import InputDescription from "../../InputDescription";
import OptionDiv from "./OptionDiv";

export default function LoanLength() {
  const loanLengthArr = [5, 6, 7, 8, 9, 10];
  const [loanLength, setLoanLength] = useState(loanLengthArr[0]);
  const [optionIsShown, setOptionIsShown] = useState(false);
  const optionsArr = loanLengthArr.filter((item) => item !== loanLength);

  return (
    <>
      <Input
        onClick={() => {
          setOptionIsShown(!optionIsShown);
        }}
      >
        <InputTitle>სესხის ვადა</InputTitle>
        <InputDescription>{`${loanLength} წელი`}</InputDescription>
      </Input>
      {optionIsShown && (
        <>
          {optionsArr.map((item) => (
            <OptionDiv
              onClick={() => {
                setLoanLength(item);
                setOptionIsShown(!optionIsShown);
              }}
            >
              <InputDescription>{`${item} წელი`}</InputDescription>
            </OptionDiv>
          ))}
        </>
      )}
    </>
  );
}
