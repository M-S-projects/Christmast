import React, { useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./style";

interface Modalprops {
  isOpen: boolean;
  onClose: () => void; // Function to close the modal
}

const PromotionModal = ({ isOpen, onClose }: Modalprops) => {
  const handleModalClick = () => {
    onClose();
  };

  return isOpen
    ? createPortal(
        <S.Main onClick={handleModalClick}>
          <S.ModalContainer>
            <S.Title>
              이 창과 함께 본인의 얼굴이나온 인증샷을
              <br /> 디스코드 배선후(#0056)로 보내주세요
              <br /> 선착순 3명 수고염
            </S.Title>
          </S.ModalContainer>
        </S.Main>,
        document.body
      )
    : null;
};

export default PromotionModal;
