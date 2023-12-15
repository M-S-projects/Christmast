import axios from "axios";
import TreeSvg from "../../assets/svgs/Tree";
import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toastcontainer from "../../components/ToastContainer";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repw, setRepw] = useState("");
  const [nickname, setNickname] = useState("");
  const [code, setCode] = useState(0);
  const [verified, setVerified] = useState(false);
  const [pwSame, setPwSame] = useState(false);

  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const sameAccountErr = () => toast.error("이미 있는 게정입니다.");
  const pwErr = () => toast.error("비밀번호가 다릅니다.");
  const notAllErr = () => toast.error("정보가 전부 입력되지 않았습니다");
  const codeErr = () => toast.error("인증번호가 다릅니다.");
  const codeSend = () => toast.success("인증번호가 발송되었습니다!");
  const codeSuccess = () => toast.success("인증되었습니다!");
  const registerSuccess = () => toast.success("회원가입이 완료되었습니다!");

  useEffect(() => {
    if (password !== "" && repw !== "" && password === repw) {
      setPwSame(true);
    } else {
      setPwSame(false);
    }
  }, [password, repw]);

  const onSubmit = (event: any) => {
    if (verified) signUp();
  };

  const signUp = async () => {
    if (nickname === "" || password === "" || repw === "") {
      notAllErr();
    } else if (!pwSame) {
      pwErr();
      console.log("비번맨");
    } else if (email && nickname && password) {
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
          registerSuccess();
          if (res.status === 201) {
            navigate("./");
          }
        })
        .catch((err) => {
          if (err.response.data.code === 409) {
            sameAccountErr();
            setVerified(false);
          }
        });
      console.log(_response);
    }
  };

  const verifyEmail = async () => {
    const _response = await axios({
      method: "post",
      url: `${baseUrl}/email`,
      data: {
        email: email,
      },
    })
      .then(() => codeSend())
      .catch((err) => err.response);
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
          codeSuccess();
          setVerified(true);
        }
      })
      .catch((err) => codeErr());
  };

  return (
    <>
      <Toastcontainer />
      <S.register
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <TreeSvg />
        <S.h1>회원가입</S.h1>
        <S.inputDesc>이메일</S.inputDesc>
        <S.email>
          {verified ? (
            <S.input type="email" value={email} />
          ) : (
            <S.input
              type="email"
              placeholder="이메일"
              onChange={(event: any) => {
                setEmail(event.target.value);
              }}
            />
          )}

          <S.button onClick={verifyEmail}>인증 번호 받기</S.button>
        </S.email>
        {verified ? (
          <>
            <S.input type="number" value={code} />
            <S.button>인증하기</S.button>
          </>
        ) : (
          <>
            <S.input
              type="number"
              placeholder="이메일 인증코드"
              onChange={(event: any) => {
                setCode(event.target.value);
              }}
            />
            <S.button onClick={patchEmail}>인증하기</S.button>
          </>
        )}

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
    </>
  );
};

export default RegisterPage;
