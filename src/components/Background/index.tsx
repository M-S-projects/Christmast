import React from "react";
import * as S from "./style";

const generateSnowflakes = () => {
  let snowflakes = [];
  for (let i = 0; i < 50; i++) {
    snowflakes.push(
      <S.Snowflake
        key={i}
        style={{
          left: `${Math.random() * 100}vw`,
          animationDelay: `-${Math.random() * 10}s`,
        }}
      />
    );
  }
  return snowflakes;
};

const Background = () => {
  return <S.Container>{generateSnowflakes()}</S.Container>;
};

export default Background;
