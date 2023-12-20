import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(25, 25, 25, 0.3);
`;

export const ModalContainer = styled.div`
  width: 600px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #984d16;
  overflow: auto;
  color: #000;
  border: none;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  color: #fff;
  text-indent: 1em;
  margin-top: 3rem;
`;

export const Message = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 90%;
  height: 60%;
  margin-top: 4rem;
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 1.2rem;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 14rem;
  height: 3rem;
  margin-top: 3rem;
  border-radius: 1.5rem;
  background: #e48744;
  border: none;
  display: block; /* 추가 */
`;
