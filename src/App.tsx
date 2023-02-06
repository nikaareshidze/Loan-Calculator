import Form from "./components/form/Form";
import Result from "./components/result/Result";
import Container from "./components/Container";

import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form />
        <Result />
      </Container>
    </>
  );
}

export default App;
