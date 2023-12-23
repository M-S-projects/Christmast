import { useState, useEffect } from "react";
import TreeSvg from "../../assets/svgs/Tree";
import * as S from "./style";
import axios from "axios";
import { loginDataType } from "../../types/LoginType";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState<number>();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const onLogin = () => {
    login();
  };

  useEffect(() => {
    if (userId) {
      navigate(`/tree/${userId}?page=0`);
    }
  }, [userId]);

  const login = async () => {
    await axios<loginDataType>({
      url: `${baseUrl}/auth`,
      method: "post",
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      localStorage.setItem("chr-accessToken", res.data.accessToken);
      localStorage.setItem("chr-accessExpiredAt", res.data.expiredAt);
      localStorage.setItem("chr-userId", String(res.data.currentUserId));
      setUserId(res.data.currentUserId);
      console.log(res);
    });
  };

  return (
    <S.LoginPage>
      <TreeSvg />
      <S.title>로그인</S.title>
      <S.input
        type="text"
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.input type="submit" value={"로그인하기"} onClick={onLogin} />
    </S.LoginPage>
  );
};

export default Login;
