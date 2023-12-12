export interface TreeItemType {
  name: string;
  commentType: commentType;
  commentId: number;
}

type commentType = "BELL" | "TOY" | "CANDY";
