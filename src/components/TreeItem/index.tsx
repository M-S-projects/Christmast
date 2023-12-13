import BellSvg from "../../assets/svgs/Bell";
import CandySvg from "../../assets/svgs/Candy";
import { TreeItemType } from "../../types/TreeItemType";
import * as S from "./style";

const TreeItem = (props: TreeItemType) => {
  if (props.commentType === "BELL") {
    return (
      <S.TreeItem>
        <BellSvg />
        <p>{props.name}2</p>
      </S.TreeItem>
    );
  } else if (props.commentType === "TOY") {
    return (
      <S.TreeItem>
        <BellSvg />
        <p>{props.name}3</p>
      </S.TreeItem>
    );
  } else {
    return (
      <S.TreeItem>
        <CandySvg />
        <p>{props.name}1</p>
      </S.TreeItem>
    );
  }
};

export default TreeItem;
