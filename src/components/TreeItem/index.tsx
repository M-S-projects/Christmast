import BellSvg from "../../assets/svgs/Bell";
import CandySvg from "../../assets/svgs/Candy";
import { TreeItemType } from "../../types/TreeItemType";
import * as S from "./style";

interface TreeItemProps extends TreeItemType {
  onClick: () => void;
}

const TreeItem = (props: TreeItemProps) => {
  return (
    <S.TreeItem onClick={props.onClick}>
      {props.commentType === "BELL" ? (
        <BellSvg />
      ) : props.commentType === "TOY" ? (
        <BellSvg />
      ) : (
        <CandySvg />
      )}
      <p>{props.name}</p>
    </S.TreeItem>
  );
};

export default TreeItem;
