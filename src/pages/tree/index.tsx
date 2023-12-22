import BellSvg from "../../assets/svgs/Bell";
import CandySvg from "../../assets/svgs/Candy";
import { TreeItemType } from "../../types/TreeItemType";
import ViewModal from "../../components/Modal/ViewModal";
import * as S from "./style";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import CommentTree from "../../assets/svgs/CommentTree";
import ArrowSvg from "../../assets/svgs/Arrow";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { isOpenState, pageNextState } from "../../atoms/state";
import CommentPostPage from "../../components/Modal/PostModal";
import { API } from "../../API";
import TreeItem from "../../components/TreeItem";

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
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const firstPage = () => toast.error("첫 페이지입니다.");
  const lastPage = () => toast.error("마지막 페이지입니다.");

  useEffect(() => {
    userNameFetch();
  }, [params]);

  const userNameFetch = async () => {
    const _response = await API({
      method: "get",
      url: `/auth/${params.userId}`,
    });
    console.log(_response);
  };

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

  const handleTreeItemClick = (itemId: number) => {
    setSelectedItemId(itemId);
    setViewModalOpen(true);
  };

  return (
    <>
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
                    return (
                      <TreeItem
                        name={data.name}
                        onClick={() => handleTreeItemClick(data.commentId)}
                        key={data.commentId}
                        commentId={data.commentId}
                        commentType={data.commentType}
                      />
                    );
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
      {isViewModalOpen && (
        <ViewModal
          id={selectedItemId || 0}
          isOpen={isViewModalOpen}
          onClose={() => setViewModalOpen(false)}
        />
      )}
      <CommentPostPage />
    </>
  );
};

export default Tree;
