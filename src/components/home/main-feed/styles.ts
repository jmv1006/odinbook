import styled from "styled-components";


export const MainFeedContainerStyles = styled.div`
    @media (max-width: 1250px) {
        width: 75%;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
    width: 50%;
    height: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`

export const NewPostInFeedNotification = styled.button`
    width: 10rem;
    height: 2.5rem;
    margin-top: .5rem;
    position: absolute;
    border: 2px solid blue;
    background-color: blue;
    color: white;
`