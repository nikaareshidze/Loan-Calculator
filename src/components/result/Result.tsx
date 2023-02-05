import Wrapper from "./Wrapper";
import ResultTitle from "./ResultTitle";
import ResultProperties from "./ResultProperties";
import ResultDescription from "./ResultDescription";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Result() {
  const loanAmount = useSelector(
    (state: RootState) => state.formValues.loanAmount
  );
  const loanLength = useSelector(
    (state: RootState) => state.formValues.loanLength
  );
  const loanType = useSelector((state: RootState) => state.formValues.loanType);

  const loanLengthMonths =
    loanType == "იპოთეკური სესხი" ? loanLength * 12 : loanLength;

  const interestRatePerMonth = loanType == "იპოთეკური სესხი" ? 11 : 9;

  function PMT(ir: number, np: number, pv: number, fv: number, type: number) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
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
    ).toFixed(2)
  );

  return (
    <Wrapper>
      <div style={{ width: "90%", margin: "auto" }}>
        <ResultDescription>ყოველთვიური გადასახადი</ResultDescription>
        <ResultTitle>{`${payment} ლარი`}</ResultTitle>
        <ResultProperties>
          <ResultDescription>წლიური პროცენტი</ResultDescription>
          <ResultDescription>
            {loanType == "იპოთეკური სესხი" ? "11%-დან" : "9%-იდან"}
          </ResultDescription>
        </ResultProperties>
        <ResultProperties>
          <ResultDescription>ეფექტური პროცენტი</ResultDescription>
          <ResultDescription>
            {loanType == "იპოთეკური სესხი" ? "14.85%-დან" : "18.5%-იდან"}
          </ResultDescription>
        </ResultProperties>
        <ResultProperties>
          <ResultDescription>თანხის რაოდენობა</ResultDescription>
          <ResultDescription>{`${loanAmount} ლარი`}</ResultDescription>
        </ResultProperties>
        <ResultProperties>
          <ResultDescription>სესხის ვადა</ResultDescription>
          <ResultDescription>{`${loanLength} ${
            loanType == "იპოთეკური სესხი" ? "წელი" : "თვე"
          }`}</ResultDescription>
        </ResultProperties>
      </div>
    </Wrapper>
  );
}
