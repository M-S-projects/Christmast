import styled from "styled-components";

export const PromotionPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    width: 75px;
    height: auto;
  }
`;

export const PromotionTitle = styled.div`
  font-size: 50px;
  margin-bottom: 1em;
`;

export const PromotionDesc = styled.div`
  font-size: 25px;
`;

export const Link = styled.div`
  margin-top: 1em;
  display: flex;

  a {
    display: block;
    width: 10em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    background-color: #c9e1c3;
    color: #000;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
  }
`;
