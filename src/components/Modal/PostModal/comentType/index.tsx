import { useRecoilState } from "recoil";
import { commentType } from "../../../../atoms/state";
import CandySvg from "../../../../assets/svgs/Candy";
import BellSvg from "../../../../assets/svgs/Bell";
import * as S from "../style";

const CmtType = () => {
  const [cmtType, setCmtType] = useRecoilState(commentType);

  const onLabelClick = (props: any) => {
    setCmtType(props.target.value);
    console.log(cmtType);
  };
  return (
    <S.commentTypeContainer>
      <S.radioTitle>장식을 선택해주세요!</S.radioTitle>
      <S.labelContainer>
        <label htmlFor="TOY">
          <CandySvg />
          <S.labelDesc>장난감</S.labelDesc>
        </label>
        <label htmlFor="CANDY">
          <CandySvg />
          <S.labelDesc>캔디</S.labelDesc>
        </label>
        <label htmlFor="BELL">
          <BellSvg />
          <S.labelDesc>종</S.labelDesc>
        </label>
      </S.labelContainer>
      <S.radioContainer>
        <S.radio
          type="radio"
          name="commentType"
          id="TOY"
          value="TOY"
          onClick={onLabelClick}
        />
        <S.radio
          type="radio"
          name="commentType"
          id="CANDY"
          value="CANDY"
          onClick={onLabelClick}
        />
        <S.radio
          type="radio"
          name="commentType"
          id="BELL"
          value="BELL"
          onClick={onLabelClick}
        />
      </S.radioContainer>
    </S.commentTypeContainer>
  );
};

export default CmtType;
