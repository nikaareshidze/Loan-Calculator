import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import LoanType from "./loan_type/LoanType";
import LoanAmount from "./loan_amount/LoanAmount";
import LoanLength from "./loan_length/LoanLength";

function Form() {
  const loanAmount = useSelector(
    (state: RootState) => state.formValues.loanAmount
  );
  const loanLength = useSelector(
    (state: RootState) => state.formValues.loanLength
  );
  const loanType = useSelector((state: RootState) => state.formValues.loanType);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#050604",
      }}
    >
      <LoanType />
      <LoanAmount />
      <LoanLength />
    </div>
  );
}

export default Form;
