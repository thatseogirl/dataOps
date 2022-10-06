import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  cursor: pointer;
`;

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.navBar};
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
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
  opacity: 1;
  transition: transform 6s ease-in-out;
  transform: translate(-100px);
  input {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  border: 8px thin ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow: 0px 0px 0 1px #e0e0e7;
  padding: 1em 1.5em;
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1.75em;
  @media (max-width: ${({ theme }) => theme.responsiveness.desktop}) {
    width: 100%;
    /* padding: 4em; */
    }
`;
export const StyledLogoHeader = styled.div`
  display: flex;
  gap: 1em;
  h4 {
    margin-top: 1em;
    font-weight: 600;
    letter-spacing: -0.1px;
  }
`;
