import { Link } from "react-router-dom";
import TreeSvg from "../../assets/svgs/Tree";
import * as S from "./style";

const PromotionPage = () => {
  return (
    <S.PromotionPage>
      <TreeSvg />
      <S.PromotionTitle>
        Welcome To 영장류 GOAT, CHRISTIANO RONALDO
      </S.PromotionTitle>
      <S.PromotionDesc>
        젠장, 또 신두형이야, 이 방명록만 쓰고 자려고 했는데, 또 신두형을 보고야
        말았어
      </S.PromotionDesc>
      <S.Link>
        <Link to={"/register"}>기습 숭배 시작하기</Link>
        <Link to={"/login"}>상습 숭배 시작하기</Link>
      </S.Link>
    </S.PromotionPage>
  );
};

export default PromotionPage;
