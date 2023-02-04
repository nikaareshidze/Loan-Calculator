import LoanType from "./components/form/loan_type/LoanType";
import LoanAmount from "./components/form/loan_amount/LoanAmount";
import LoanLength from "./components/form/loan_length/LoanLength";

function App() {
  return (
    <div>
      <LoanType />
      <LoanAmount />
      <LoanLength />
    </div>
  );
}

export default App;
