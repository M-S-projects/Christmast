import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globals";
import * as S from "./style";
import PromotionPage from "./pages/promotion";
import RegisterPage from "./pages/register";
import Background from "./components/Background";
import Login from "./pages/login";
import Tree from "./pages/tree";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <S.Index className="App">
        <Background />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PromotionPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tree/:userId" element={<Tree />} />
          </Routes>
        </BrowserRouter>
      </S.Index>
    </RecoilRoot>
  );
}
export default App;
