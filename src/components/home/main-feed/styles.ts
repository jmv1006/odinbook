import styled from "styled-components";


export const MainFeedContainerStyles = styled.div`
    @media (max-width: 1250px) {
        width: 75%;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
    border: 1px solid black;
    width: 50%;
    height: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`