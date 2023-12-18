import * as S from "./style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API";
import Modal from "react-modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { commentType, isOpenState, pageNextState } from "../../atoms/state";
import MessageContent from "./messageContent";
import CmtType from "./comentType";
import CloseSvg from "../../assets/svgs/Close";

const CommentPostPage = () => {
  const params = useParams().userId;

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [pageNext, setPageNext] = useRecoilState<boolean>(pageNextState);
  const cmtType = useRecoilValue(commentType);

  useEffect(() => {
    console.log(params);
  }, [params]);

  const onPostBtnClick = () => {
    if (cmtType === undefined) {
      alert("장식을 골라야해요!");
      console.log(cmtType);
    } else {
      posting();
    }
  };

  const posting = () => {
    API({
      method: "post",
      url: `/comment/${params}`,
      data: {
        name: name,
        comment: comment,
        commentType: cmtType,
      },
    }).catch((err) => console.log(err));
  };

  return (
    <Modal
      isOpen={isOpen}
      style={S.customModalStyles}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
    >
      <S.closeSvg onClick={() => setIsOpen(false)}>
        <CloseSvg />
      </S.closeSvg>
      <S.postTitle>메세지 작성하기</S.postTitle>
      {pageNext ? (
        <S.postPage>
          <MessageContent
            setComment={setComment}
            setName={setName}
            comment={comment}
          />
          <S.button
            type="button"
            onClick={onPostBtnClick}
            value={"메세지 보내기"}
          />
        </S.postPage>
      ) : (
        <>
          <CmtType />
          <S.button
            type="button"
            onClick={() => setPageNext(true)}
            value={"다음으로"}
          />
        </>
      )}
    </Modal>
  );
};

export default CommentPostPage;
