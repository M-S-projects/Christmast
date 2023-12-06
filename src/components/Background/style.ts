import styled, { keyframes } from "styled-components";

export const snowfall = keyframes`
  to {
    transform: translateY(100vh);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: black; 
`;

export const Snowflake = styled.div`
  position: absolute;
  width: 1vw;
  height: 1vw;
  background: white;
  border-radius: 50%;
  animation: ${snowfall} 10s linear infinite;
`;
