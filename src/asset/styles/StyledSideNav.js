import styled from "styled-components";

export const SideNavContainer = styled.div`
  background: ${({ theme }) => theme.colors.bgColor_sideNav};
  position: fixed;
  width: 18%;
  height: 100%;
  right: 0px;
  top: 56px;
  bottom: 0px;
  margin: 0;
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
  padding-top: 0.5em;
`;
export const StyledLi = styled.li`
width: 80%;
margin: auto;
    color:${({ theme }) => theme.colors.admin};
    padding: 0.5em 1.2em;
    letter-spacing: 0.25px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.signOut};
    border-radius: 2px;
    border: 1px solid ;
  }
`;
export const Section = styled.section`
padding: 0.75em 2.5em;
`;
