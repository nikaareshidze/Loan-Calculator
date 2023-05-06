import GlobalStyle from "./GlobalStyle";
import {
  Header,
  LoanDescription,
  LoanDetails,
  LoanProperties,
  LoanType,
} from "./components/new";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <LoanProperties />
            <LoanDescription />
          </div>
          <div
            style={{
              width: "75%",
              backgroundColor: "#050604",
              height: "calc(100vh - 80px)",
            }}
          >
            <div style={{ paddingTop: "88px", paddingLeft: "96px" }}>
              <LoanDetails />
              <LoanType />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
