import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    width: 80%;
    margin: auto;
    padding: 7.5em;
    @media (max-width: ${({ theme }) => theme.responsiveness.desktop}) {
    width: 100%;
    padding: 4em;
    }
    @media (max-width: ${({ theme }) => theme.responsiveness.ipad}) {
    width: 100%;
    padding: 4em;
    }
`;