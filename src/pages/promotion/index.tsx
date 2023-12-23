import { Link } from "react-router-dom";
import TreeSvg from "../../assets/svgs/Tree";
import * as S from "./style";

const PromotionPage = () => {
  return (
    <S.PromotionPage>
      <TreeSvg />
      <S.PromotionTitle>Happy For Christmas!</S.PromotionTitle>
      <S.PromotionDesc>
        크리스마스에는 여러 사람들과 함께 메세지를 나눠보세요.
      </S.PromotionDesc>
      <S.Link>
        <Link to={"/register"}>회원가입하기</Link>
        <Link to={"/login"}>로그인하기</Link>
      </S.Link>
    </S.PromotionPage>
  );
};

export default PromotionPage;
