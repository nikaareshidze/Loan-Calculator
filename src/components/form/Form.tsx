import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import LoanType from "./loan_type/LoanType";
import LoanAmount from "./loan_amount/LoanAmount";
import LoanLength from "./loan_length/LoanLength";

function Form() {
  const loanAmount = useSelector(
    (state: RootState) => state.formValues.loanAmount
  );

  return (
    <div>
      <LoanType />
      <LoanAmount />
      <LoanLength />
      <button
        onClick={() => {
          console.log(loanAmount);
        }}
      >
        გამოთვალე
      </button>
    </div>
  );
}

export default Form;
