import axios from "axios";
import * as S from "./style";
import { useEffect, useState } from "react";
import { CommentType } from "../../types/CommentType";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../API";

const CommentPostPage = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const params = useParams().userId;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [cmtType, setCmtType] = useState<CommentType>();

  useEffect(() => {
    console.log(params);
  }, []);

  const onLabelClick = (props: any) => {
    setCmtType(props.target.value);
  };

  const onPostBtnClick = () => {
    if (cmtType === undefined) {
      alert("장식을 골라야지 병신아");
    } else {
      posting();
    }
  };

  const posting = () => {
    API({
      method: "post",
      url: `  /comment/${params}`,
      data: {
        name: name,
        comment: comment,
        commentType: cmtType,
      },
    }).catch((err) => console.log(err));
  };

  return (
    <S.postPage>
      <S.name type="text" onChange={(e) => setName(e.target.value)} />
      <S.textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div>
        <label htmlFor="TOY">장난감</label>
        <label htmlFor="CANDY">사탕</label>
        <label htmlFor="BELL">종</label>
      </div>

      <div>
        <input
          type="radio"
          name="commentType"
          id="TOY"
          value="TOY"
          onClick={onLabelClick}
        />
        <input
          type="radio"
          name="commentType"
          id="CANDY"
          value="CANDY"
          onClick={onLabelClick}
        />
        <input
          type="radio"
          name="commentType"
          id="BELL"
          value="BELL"
          onClick={onLabelClick}
        />
      </div>
      <S.button type="text" onClick={onPostBtnClick} value={"메세지 보내기"} />
    </S.postPage>
  );
};

export default CommentPostPage;
