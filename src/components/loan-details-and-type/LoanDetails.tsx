import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function LoanDetails() {
  const loanType = useSelector((state: RootState) => state.formValues.loanType);
  const loanAmount = useSelector(
    (state: RootState) => state.formValues.loanAmount
  );
  const loanLength = useSelector(
    (state: RootState) => state.formValues.loanLength
  );

  const loanLengthMonths =
    loanType == "Mortgage Loan" ? loanLength * 12 : loanLength;

  const interestRatePerMonth = loanType == "Mortgage Loan" ? 11 : 9;

  function PMT(ir: number, np: number, pv: number, fv: number, type: number) {
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0) return -(pv + fv) / np;

    pvif = Math.pow(1 + ir, np);
    pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);

    if (type === 1) pmt /= 1 + ir;

    return pmt;
  }

  const payment = Math.abs(
    PMT(
      interestRatePerMonth / 100 / 12,
      loanLengthMonths,
      loanAmount,
      0,
      0
    ).toFixed(0)
  );

  return (
    <div style={{ color: "white", marginBottom: "36px" }}>
      <div style={{ color: "white", fontSize: "36px", fontWeight: "bold" }}>
        {`$${payment}`}
        <span style={{ fontSize: "16px", fontWeight: "normal" }}> / mon.</span>
      </div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "normal",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: "36px",
        }}
      >
        <p>
          {`Annual interest `}
          <span>{loanType == "Mortgage Loan" ? "from 11%" : "from 9%"}</span>
        </p>
        <p>
          {`Effective interest `}
          <span>
            {loanType == "Mortgage Loan" ? "from 14.85%" : "from 18.5%"}
          </span>
        </p>
        <p>Loan amount: {loanAmount}</p>
        <p>Loan length: {loanLength}</p>
      </div>
    </div>
  );
}
