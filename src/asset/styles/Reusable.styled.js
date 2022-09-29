import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2.5em;
  cursor: pointer;
  padding-top: 0.25em;
`;

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.navBar};
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 0.75em;
`;
export const StyledForm = styled.form`
  display: flex;
  gap: 8px;
  padding: 0.5em 1.2em;
  border: 1px solid ${({ theme }) => theme.colors.navigationMenu};
  border-radius: 4px;
  opacity: 0.64;
  transform: translate(-30px);
  transition: opacity 0.2s linear 0s, transform 0.2s linear 0s;
`;

export const StyledClickedForm = styled.form`
  display: flex;
  gap: 8px;
  padding: 0.5em 1.2em;
  border: 1px solid ${({ theme }) => theme.colors.navigationMenu};
  border-radius: 4px;
  opacity:1;
  transition: transform 6s ease-in-out;
  transform: translate(-100px);
  input {
    width: 100%;
  }
`;
