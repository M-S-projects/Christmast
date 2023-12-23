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
  font-size: 120px;
  margin-bottom: 0.5em;
  font-weight: 700;
`;

export const PromotionDesc = styled.div`
  font-size: 40px;
  margin-bottom: 2em;
`;

export const Link = styled.div`
  margin-top: 1em;
  display: flex;

  a {
    display: block;
    width: 10em;
    height: 1.5em;
    line-height: 1.5em;
    font-size: 32px;
    text-align: center;
    background-color: #c9e1c3;
    color: #000;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
  }
`;
