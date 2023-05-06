import { useDispatch } from "react-redux";
import {
  setLoanProperty,
  setLoanAmount,
  setLoanLength,
} from "../../../store/formValuesSlice";

export default function LoanType() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginBottom: "16px",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <div
        onClick={() => {
          dispatch(setLoanProperty("Basic"));
          dispatch(setLoanAmount(50000));
          dispatch(setLoanLength(5));
        }}
        style={{ cursor: "pointer" }}
      >
        Basic
      </div>
      <div
        onClick={() => {
          dispatch(setLoanProperty("Startup"));
          dispatch(setLoanAmount(500000));
          dispatch(setLoanLength(10));
        }}
        style={{ cursor: "pointer" }}
      >
        Startup
      </div>
      <div
        onClick={() => {
          dispatch(setLoanProperty("Premium"));
          dispatch(setLoanAmount(1000000));
          dispatch(setLoanLength(15));
        }}
        style={{ cursor: "pointer" }}
      >
        Premium
      </div>
      <div
        onClick={() => {
          dispatch(setLoanProperty("Pro"));
          dispatch(setLoanAmount(20000000));
          dispatch(setLoanLength(20));
        }}
        style={{ cursor: "pointer" }}
      >
        Pro
      </div>
    </div>
  );
}
