import { atom } from "recoil";

export const isOpenState = atom({
  key: "isOpenState",
  default: false,
});

export const commentType = atom({
  key: "commentType",
  default: "",
});

export const pageNextState = atom({
  key: "pageNext",
  default: false,
});
