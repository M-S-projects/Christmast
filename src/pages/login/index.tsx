import { useState, useEffect } from "react";
import TreeSvg from "../../assets/svgs/Tree";
import * as S from "./style";
import axios from "axios";
import { loginDataType } from "../../types/LoginType";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const onLogin = () => {
    login();
  };

  const login = async () => {
    const _response = await axios<loginDataType>({
      url: `${baseUrl}/auth`,
      method: "post",
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      localStorage.setItem("chr-accessToken", res.data.accessToken);
      localStorage.setItem("chr-accessExpiredAt", res.data.expiredAt);
    });
    console.log(_response);
  };

  return (
    <S.LoginPage>
      <TreeSvg />
      <S.title>로그인맨이야</S.title>
      <input
        type="text"
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value={"로그인하기"} onClick={onLogin} />
    </S.LoginPage>
  );
};

export default Login;
