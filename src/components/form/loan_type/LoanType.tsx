import { useState } from "react";

import Input from "../../Input";
import InputTitle from "../../InputTitle";
import InputDescription from "../../InputDescription";

export default function LoanType() {
  const loanTypeArr = ["იპოთეკური სესხი", "სამომხმარებლო სესხი"];
  const [loanType, setLoanType] = useState(loanTypeArr[0]);
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
            height: 64,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#d5d5d5",
            borderRadius: 8,
            cursor: "pointer",
          }}
          onClick={() => {
            loanType == loanTypeArr[0]
              ? setLoanType(loanTypeArr[1])
              : setLoanType(loanTypeArr[0]);
            setOptionIsShown(!optionIsShown);
          }}
        >
          <h1 style={{ fontSize: 14, fontWeight: 400 }}>
            {loanType == loanTypeArr[0] ? loanTypeArr[1] : loanTypeArr[0]}
          </h1>
        </div>
      )}
    </>
  );
}
