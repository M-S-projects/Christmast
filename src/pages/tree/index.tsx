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
import TreeItem from "../../components/TreeItem";
import Toastcontainer from "../../components/ToastContainer";

type arrowType = "left" | "right";

const Tree = () => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState<TreeItemType[]>();
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [pageNext, setPageNext] = useRecoilState<boolean>(pageNextState);
  const [name, setName] = useState<string>();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const userId = params.userId;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageId = searchParams.get("page");
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const id = localStorage.getItem("chr-userId");

  const firstPage = () => toast.error("첫 페이지입니다.");
  const lastPage = () => toast.error("마지막 페이지입니다.");
  const noUser = () => toast.error("없는 유저입니다.");

  useEffect(() => {
    userNameFetch();
  }, [params]);

  const userNameFetch = async () => {
    await axios({
      method: "get",
      url: `${baseUrl}/auth/${params.userId}`,
    })
      .then((res: any) => {
        console.log(res.data);
        setName(res.data.userName);
      })
      .catch((err) => {
        console.log(err);
        noUser();
      });
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
            <S.TreeInfo>{name}님의 트리</S.TreeInfo>
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
              <Link to={`../tree/${id}?page=0`}>내 트리로 돌아가기</Link>
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
          <S.Tree>
            <S.TreeInfo>님의 트리</S.TreeInfo>
            <CommentTree />
            <S.LinkContainer>
              <Link to={`../tree/${id}?page=0`}>내 트리로 돌아가기</Link>
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
