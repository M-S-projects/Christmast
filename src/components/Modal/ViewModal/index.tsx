import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";
interface ViewModalProps {
  id: number;
  isOpen: boolean;
  onClose: () => void;
}

interface CommentData {
  name: string;
  comment: string;
  commentId: number;
}

const ViewModal = ({ id, isOpen, onClose }: ViewModalProps) => {
  const params = useParams();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const userId = params.userId;
  const [data, setData] = useState<CommentData | null>(null); // 타입을 명시적으로 지정

  const fetchData = async () => {
    const token = localStorage.getItem("chr-accessToken");

    try {
      const response = await axios({
        method: "get",
        url: `${baseUrl}/comment/${userId}/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isOpen
    ? createPortal(
        <S.Main>
          <S.ModalContainer>
            <S.Title>{data?.name}님의 메세지</S.Title>
            <S.Message>{data?.comment}</S.Message>
            <S.Button onClick={onClose}>돌아가기</S.Button>
          </S.ModalContainer>
        </S.Main>,
        document.body
      )
    : null;
};

export default ViewModal;
