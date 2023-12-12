import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Link,
  Router,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { API } from "../../API";
import CommentTree from "../../assets/svgs/CommentTree";
import * as S from "./style";
import { TreeItemType } from "../../types/TreeItemType";
import TreeItem from "../../components/TreeItem";
import ArrowSvg from "../../assets/svgs/Arrow";

const Tree = () => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState<TreeItemType[]>();
  const userId = params.userId;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageId = searchParams.get("page");

  const fetchData = async () => {
    if (userId && pageId) {
      const response: any = await API({
        method: "get",
        url: `/commentList/${userId}?offset=${pageId}`,
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
    <S.Container>
      <Link
        className="leftArrow"
        to={
          Number(pageId) === 0
            ? `?page=${Number(pageId)}`
            : `?page=${Number(pageId) - 1}`
        }
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
            <Link to={`../postPage/${userId}`}>방명록 쓰러가기</Link>
          </S.LinkContainer>{" "}
        </S.Tree>
      ) : (
        ""
      )}
      <Link
        to={
          data?.length === 0
            ? `?page=${Number(pageId)}`
            : `?page=${Number(pageId) + 1}`
        }
      >
        <ArrowSvg />
      </Link>
    </S.Container>
  );
};

export default Tree;
