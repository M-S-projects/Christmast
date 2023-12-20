import * as S from "../style";

interface propsInterface {
  setName: Function;
  setComment: Function;
  comment: string;
}

const MessageContent = (props: propsInterface) => {
  return (
    <>
      <S.name
        placeholder="보내는 사람"
        type="text"
        onChange={(e) => props.setName(e.target.value)}
      />
      <S.textarea
        value={props.comment}
        placeholder="보낼 내용"
        onChange={(e) => props.setComment(e.target.value)}
      />
    </>
  );
};

export default MessageContent;
