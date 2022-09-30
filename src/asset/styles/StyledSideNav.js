import styled from "styled-components";

export const SideNavContainer = styled.div`
  background:${({ theme }) => theme.colors.bgColor_sideNav};
  position: fixed;
  width: 18%;
  height: 100vh;
  right: 0px;
  top: 56px;
  bottom: 0px;
  margin: 0;
  padding: 21px 24px 24px;
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

export const StyledDiv = styled.div`
    padding-top: 2em;
`;

export const LineRule = styled.hr`
    width: 400px;
    background-color: red;
    padding: 0; 
`;

export const Padding = styled.div`
padding: 2.5em;
`;
