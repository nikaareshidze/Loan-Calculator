import Input from "../../Input";
import InputTitle from "../../InputTitle";

export default function LoanAmount() {
  return (
    <Input>
      <InputTitle>თანხა</InputTitle>
      <input
        style={{ outline: "none", border: "none", width: 360 }}
        defaultValue="5000"
      />
    </Input>
  );
}
