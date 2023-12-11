import axios from "axios";
import TreeSvg from "../../assets/svgs/Tree";
import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repw, setRepw] = useState("");
  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState(0);
  const [verified, setVerified] = useState(false);

  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const onSubmit = (event: any) => {
    if (verified === true && password === repw) signUp();
  };

  const signUp = async () => {
    if (email && nickname && password) {
      const _response = await axios({
        method: "post",
        url: `${baseUrl}/auth/new`,
        data: {
          email: email,
          nickName: nickname,
          password: password,
        },
      })
        .then((res) => {
          if (res.status === 201) {
            navigate("./");
          }
        })
        .catch((err) => {
          if (err.response.data.code === 409) {
            //toast(이미 있는 계정입니다.)
            setVerified(false);
          }
        });
      console.log(_response);
    } else if (password === repw) {
      //toast (비밀번호가 다릅니다.)
    } else {
      //toast(정보가 전부 입력되지 않았습니다!)
    }
  };

  const verifyEmail = async () => {
    const _response = await axios({
      method: "post",
      url: `${baseUrl}/email`,
      data: {
        email: email,
      },
    }).catch((err) => err.response);
    console.log(_response);
  };

  const patchEmail = () => {
    axios
      .patch(`${baseUrl}/email`, {
        email: email,
        code: code,
      })
      .then((res) => {
        if (res.status === 204) {
          //toast (인증번호가 틀립니다)
          setVerified(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.register
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <TreeSvg />
      <S.h1>회원가입맨123</S.h1>
      <S.inputDesc>이메일</S.inputDesc>
      <S.email>
        {verified ? (
          <S.input type="email" value={email} />
        ) : (
          <S.input
            type="email"
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
        )}
        <S.button onClick={verifyEmail}>인증 번호 받기</S.button>
      </S.email>
      <S.input
        type="number"
        placeholder="이메일 인증해줘"
        onChange={(event: any) => {
          setCode(event.target.value);
        }}
      />
      <S.button onClick={patchEmail}>인증하기</S.button>

      {verified === true ? (
        <>
          <S.inputDesc>닉네임</S.inputDesc>
          <S.input
            type="nickname"
            onChange={(event: any) => {
              setNickname(event.target.value);
            }}
          />
          <S.inputDesc>비밀번호</S.inputDesc>
          <S.input
            type="password"
            onChange={(event: any) => {
              setPassword(event.target.value);
            }}
          />
          <S.inputDesc>비밀번호 재입력</S.inputDesc>
          <S.input
            type="password"
            onChange={(event: any) => {
              setRepw(event.target.value);
            }}
          />
          <S.button onClick={onSubmit}>회원가입 하기</S.button>
        </>
      ) : (
        ""
      )}
    </S.register>
  );
};

export default RegisterPage;
