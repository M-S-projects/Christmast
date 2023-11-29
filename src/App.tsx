import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/globals";
import * as S from "./style";
import PromotionPage from "./pages";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <S.Index className="App">
        <PromotionPage />
      </S.Index>
    </BrowserRouter>
  );
}

export default App;
