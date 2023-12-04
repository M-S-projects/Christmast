import styled from "styled-components";
import { inputProps } from "./input";

export const Input = styled.input<inputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    background: ${(props) => props.hoverBackground};
    border: ${(props) => props.hoverBorder};
    color: ${(props) => props.hoverColor};
  }
  text-decoration: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`;
