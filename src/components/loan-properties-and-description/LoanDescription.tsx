import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function LoanDescription() {
  const loanProperty = useSelector(
    (state: RootState) => state.formValues.loanProperty
  );

  return (
    <div
      style={{
        borderTop: "1px solid black",
        paddingTop: "16px",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      {loanProperty == "Basic"
        ? `Hi Basic. This means that loan amount is 50000 & loan length is 5`
        : loanProperty == "Startup"
        ? "Hi Startup. This means that loan amount is 500000 & loan length is 10"
        : loanProperty == "Premium"
        ? "Hi Premium. This means that loan amount is 1000000 & loan length is 15"
        : loanProperty == "Pro"
        ? "Hi Pro. This means that loan amount is 20000000 & loan length is 20"
        : ""}
    </div>
  );
}
