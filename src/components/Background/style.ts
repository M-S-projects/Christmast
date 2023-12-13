import styled, { keyframes } from "styled-components";

interface SnowflakeProps {
  speed: number;
  size: number;
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
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(50, 79, 124, 1) 100%
  );
  z-index: -1;
`;

export const Snowflake = styled.div<SnowflakeProps>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: white;
  border-radius: 50%;
  filter: blur(5px);
  animation: ${snowfall} ${(props) => props.speed}s linear infinite;
`;
