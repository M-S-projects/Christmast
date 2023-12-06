import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globals";
import * as S from "./style";
import PromotionPage from "./pages/promotion";
import RegisterPage from "./pages/register";
import Background from "./components/Background";
import Login from "./pages/login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Background />
      <S.Index className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PromotionPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </S.Index>
    </>
  );
}

export default App;
