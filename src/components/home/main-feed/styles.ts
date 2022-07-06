import styled from "styled-components";


export const MainFeedContainerStyles = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    gap: 1rem;
    @media (max-width: 650px) {
        width: 100%;
    }
`