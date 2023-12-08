import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globals";
import * as S from "./style";
import PromotionPage from "./pages/promotion";
import RegisterPage from "./pages/register";
import Background from "./components/Background";
import Tree from "./pages/tree";

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Index className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PromotionPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/background" element={<Background />} />
            <Route path="/tree/:userId/:pageId" element={<Tree />} />
          </Routes>
        </BrowserRouter>
      </S.Index>
    </>
  );
}

export default App;
