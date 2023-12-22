import ReactModal from "react-modal";
import styled from "styled-components";

export const postPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const postTitle = styled.h2`
  font-size: 42px;
  text-align: center;
  color: #fff;
  text-indent: 1em;
`;

export const closeSvg = styled.div`
  float: right;
  svg {
    width: 45px;
    height: auto;
    cursor: pointer;
  }
`;

export const textarea = styled.textarea`
  font-size: 22px;
  resize: none;
  width: 20em;
  min-height: 20em;
  color: #000;
  padding: 0.5em;
  height: auto;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const button = styled.input`
  font-size: 22px;
  width: 11em;
  height: 2em;
  text-align: center;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 1em;
  background-color: #e48744;
  margin-left: 50%;
  transform: translate(-50%, 0);
  margin-right: 1em;
`;

export const name = styled.input`
  width: 11em;
  font-size: 25px;
  color: #000;
  text-align: center;
  margin-top: 1em;
`;

export const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "600px",
    height: "800px",
    zIndex: "150",
    marginTop: "27.5em",
    marginLeft: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#984D16",
    overflow: "auto",
    color: "#000",
    border: "none",
  },
};

export const commentTypeContainer = styled.div`
  margin-top: 2em;
`;

export const radioTitle = styled.h3`
  font-size: 30px;
  text-align: center;
`;

export const labelContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5em;
  label > svg {
    width: auto;
    height: 140px;
  }
`;

export const labelDesc = styled.div`
  font-size: 24px;
  text-align: center;
`;

export const radioContainer = styled.div`
  margin-top: 5em;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15em;
  input {
    width: 30px;
    height: auto;
  }
`;

export const radio = styled.input`
  width: 30px;
  height: 30px;
  font-size: 24px;
`;
