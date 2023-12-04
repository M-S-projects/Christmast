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

  const onSubmit = (event: any) => {
    if (verified === true && password === repw) signUp();
  };

  const signUp = async () => {
    const _response = await axios({
      method: "post",
      url: "https://port-0-chr-koh2xljfbuiob.sel4.cloudtype.app/v1/auth/new",
      data: {
        email: email,
        nickName: nickname,
        password: password,
      },
    })
      .then((res) => {
        if (res.status == 201) {
          navigate("./");
        }
      })
      .catch((err) => {
        if (err.response.data.code === 409) {
          console.log("이미 있는 계정입니다.");
          setVerified(false);
        }
      });
    console.log(_response);
  };

  const verifyEmail = async () => {
    const _response = await axios({
      method: "post",
      url: "https://port-0-chr-koh2xljfbuiob.sel4.cloudtype.app/v1/email",
      data: {
        email: email,
      },
    }).catch((err) => err.response);
    console.log(_response);
  };

  const patchEmail = () => {
    axios
      .patch("https://port-0-chr-koh2xljfbuiob.sel4.cloudtype.app/v1/email", {
        email: email,
        code: code,
      })
      .then((res) => {
        if (res.status === 204) {
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
      <div>이메일</div>
      <S.email>
        {verified ? (
          <input type="text" value={email} />
        ) : (
          <input
            type="text"
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
          />
        )}
        <button onClick={verifyEmail}>인증하기 </button>
      </S.email>
      <input
        type="text"
        placeholder="이메일 인증해줘"
        onChange={(event: any) => {
          setCode(event.target.value);
        }}
      />
      <input type="button" value={"ㅁㄴㅇㄹ"} onClick={patchEmail} />
      <div>닉네임</div>
      <input
        type="text"
        onChange={(event: any) => {
          setNickname(event.target.value);
        }}
      />
      <div>비밀번호</div>
      <input
        type="password"
        onChange={(event: any) => {
          setPassword(event.target.value);
        }}
      />
      <div>비밀번호 재입력</div>
      <input
        type="password"
        onChange={(event: any) => {
          setRepw(event.target.value);
        }}
      />
      <input type="submit" onClick={onSubmit} value={"회원가입 완성"} />
    </S.register>
  );
};

export default RegisterPage;
