import styled from "styled-components";

export const SideNavContainer = styled.div`
  background: red;
  position: fixed;
  width: 18%;
  height: 100vh;
  float: left;
  right: 0px;
  top: 59px;
  bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  animation: moveSide 4s ease-in-out;
  transform-box: fill-box;

  @keyframes moveSide {
    0% {
      opacity: 0;
      transform: translate(-20px, 0);
    }
    20% {
      opacity: 1;
      transform: translate(0px, 0);
    }
  }
`;
