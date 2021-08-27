import styled from "styled-components";
import colorObjectType from "./types";

export const MainContainer = styled.div<{ colorObject: colorObjectType }>`
  display: flex;
  margin-left: 20px;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, #2193b0, #5f2c82);
`;

export const Wrapper = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
