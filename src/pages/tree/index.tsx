import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import CommentTree from "../../assets/svgs/CommentTree";
import * as S from "./style";
import { TreeItemType } from "../../types/TreeItemType";
import TreeItem from "../../components/TreeItem";
import ArrowSvg from "../../assets/svgs/Arrow";
import { toast } from "react-toastify";
import Toastcontainer from "../../components/ToastContainer";
import { useRecoilState } from "recoil";
import { isOpenState, pageNextState } from "../../atoms/state";
import CommentPostPage from "../../components/PostModal";

type arrowType = "left" | "right";

const Tree = () => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState<TreeItemType[]>();
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [pageNext, setPageNext] = useRecoilState<boolean>(pageNextState);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const userId = params.userId;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageId = searchParams.get("page");

  const firstPage = () => toast.error("첫 페이지입니다.");
  const lastPage = () => toast.error("마지막 페이지입니다.");

  const pageCheck = (arrowDirection: arrowType) => {
    if (arrowDirection === "left" && Number(pageId) === 0) {
      firstPage();
    } else if (arrowDirection === "right" && data?.length === 0) {
      lastPage();
    } else {
      return;
    }
  };

  const fetchData = async () => {
    if (userId && pageId) {
      const response: any = await axios({
        method: "get",
        url: `${baseUrl}/commentList/${userId}?offset=${pageId}`,
      }).catch((err) => console.log(err));
      setData(response.data.content[0].commentResponseList);
      console.log(response.data.content[0].commentResponseList);
    }
  };

  useEffect(() => {
    console.log(location.search);
    setSearchParams(location.search);
    fetchData();
  }, [pageId]);

  return (
    <>
      <Toastcontainer />
      <S.Container>
        <Link
          className="leftArrow"
          to={
            Number(pageId) === 0
              ? `?page=${pageId}`
              : `?page=${Number(pageId) - 1}`
          }
          onClick={() => pageCheck("left")}
        >
          <ArrowSvg />
        </Link>
        {data ? (
          <S.Tree>
            <S.TreeInfo>님의 트리</S.TreeInfo>
            <CommentTree />
            <S.ItemContainer>
              {data
                ? data.map((data: TreeItemType) => {
                    return <TreeItem {...data} />;
                  })
                : ""}
            </S.ItemContainer>
            <S.LinkContainer>
              <Link to={`../tree`}>내 트리로 돌아가기</Link>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setPageNext(false);
                }}
              >
                방명록 쓰러가기
              </button>
            </S.LinkContainer>
          </S.Tree>
        ) : (
          ""
        )}
        <Link
          to={
            data?.length === 0
              ? `?page=${pageId}`
              : `?page=${Number(pageId) + 1}`
          }
          onClick={() => pageCheck("right")}
        >
          <ArrowSvg />
        </Link>
      </S.Container>
      <CommentPostPage />
    </>
  );
};

export default Tree;
