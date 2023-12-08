import axios from "axios";
import React, { useEffect, useState } from "react";
import { Router, useParams } from "react-router-dom";

const Tree = () => {
  const params = useParams();
  const [data, setData] = useState();
  const baseurl = process.env.REACT_APP_BASE_URL;
  const userId = params.userId;
  const pageId = params.pageId;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/commentList/${userId}?offset=${pageId}`
      );
      setData(response.data.content[0].commentResponseList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageId]);

  return <div></div>;
};

export default Tree;
