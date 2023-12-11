import styled from "styled-components";

export const register = styled.form`
  display: flex;
  width: 34em;
  margin-left: 50%;
  transform: translate(-50%, 0);
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  button {
    cursor: pointer;
  }

  svg {
    background-color: #020024;
  }
`;

export const h1 = styled.h1`
  font-size: 45px;
`;

export const email = styled.div`
  input {
    width: 22.5em;
    margin-right: 0.5em;
  }
  button {
    width: 7em;
    color: #000;
    font-size: 18px;
    height: 2em;
    background-color: #c9e1c3;
    border: none;
    border-radius: 2px;
  }
`;

export const input = styled.input`
  width: 30em;
  background-color: #c9e1c3;
  font-size: 18px;
  height: 2em;
  text-indent: 1em;
  border-radius: 2px;
  border: none;
  margin-top: 3px;
  color: #000;
`;

export const button = styled.button`
  width: 30em;
  background-color: #c9e1c3;
  font-size: 18px;
  height: 2em;
  border-radius: 2px;
  border: none;
  margin-top: 3px;
  color: #000;
`;

export const inputDesc = styled.div`
  font-size: 25px;
  margin-right: auto;
  margin-top: 0.5em;
`;
