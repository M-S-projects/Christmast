import React, { useState } from "react";
import { Link } from "react-router-dom";
import TreeSvg from "../../assets/svgs/Tree";
import * as S from "./style";
import PromotionModal from "../../components/Modal/PromotionModal";
const PromotionPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTreeClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 9) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.PromotionPage>
      <div onClick={handleTreeClick}>
        <TreeSvg />
      </div>
      <S.PromotionTitle>Happy For Christmas!</S.PromotionTitle>
      <S.PromotionDesc>
        크리스마스에는 여러 사람들과 함께 메세지를 나눠보세요.
      </S.PromotionDesc>
      <S.Link>
        <Link to={"/register"}>회원가입하기</Link>
        <Link to={"/login"}>로그인하기</Link>
      </S.Link>

      <PromotionModal isOpen={isModalOpen} onClose={closeModal} />
    </S.PromotionPage>
  );
};

export default PromotionPage;
