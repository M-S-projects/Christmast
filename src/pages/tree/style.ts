import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  .leftArrow {
    rotate: 180deg;
  }
`;

export const Tree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TreeInfo = styled.h1`
  font-size: 50px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 450px;
  flex-wrap: wrap;
  margin-top: -620px;
  margin-bottom: 5em;
  text-align: center;
  align-content: flex-start;
  justify-content: space-between;

  div:nth-child(1) {
    margin-left: 60px;
    margin-right: 10px;
    margin-bottom: 30px;
  }
  div:nth-child(2) {
    margin-left: 10px;
    margin-right: 60px;
    margin-bottom: 30px;
  }

  div:nth-child(3),
  div:nth-child(4),
  div:nth-child(5) {
    margin-top: 20px;
  }

  div:nth-child(6),
  div:nth-child(7),
  div:nth-child(8) {
    margin-top: 50px;
  }
`;

export const LinkContainer = styled.div`
  a {
    display: inline-block;
    width: 10em;
    height: 2em;
    line-height: 2em;
    text-align: center;
    font-size: 30px;
    background-color: #e02727;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 0.75em;
  }
`;
