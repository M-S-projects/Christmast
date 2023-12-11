import styled, { keyframes } from "styled-components";

interface SnowflakeProps {
  speed: number;
}

export const snowfall = keyframes`
  to {
    transform: translateY(100vh);
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  z-index: -1;
`;

export const Snowflake = styled.div<SnowflakeProps>`
  position: absolute;
  width: 1vw;
  height: 1vw;
  background: white;
  border-radius: 50%;
  filter: blur(3px);
  animation: ${snowfall} ${(props) => props.speed}s linear infinite;
`;
