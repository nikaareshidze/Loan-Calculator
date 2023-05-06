import { useDispatch } from "react-redux";
import { setLoanType } from "../../../store/formValuesSlice";

export default function LoanType() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(setLoanType("Mortgage Loan"));
        }}
        style={{
          backgroundColor: "transparent",
          color: "white",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "12px",
          paddingBottom: "12px",
          cursor: "pointer",
        }}
      >
        Mortgage Loan
      </button>
      <button
        onClick={() => {
          dispatch(setLoanType("Consumer Loan"));
        }}
        style={{
          backgroundColor: "#FE8701",
          color: "black",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "12px",
          paddingBottom: "12px",
          border: "1px solid #FE8701",
          marginLeft: "36px",
          cursor: "pointer",
        }}
      >
        Consumer Loan
      </button>
    </div>
  );
}
