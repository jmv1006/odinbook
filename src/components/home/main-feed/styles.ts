import styled from "styled-components";


export const MainFeedContainerStyles = styled.div`
    @media (max-width: 1250px) {
        width: 75%;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
    width: 50%;
    height: 98%;
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

export const SuggestedUsersContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.25rem;
    background-color: white;
    font-weight: bold;
`

export const SuggestedUsersBar = styled.div`
    width: 98%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    gap: 5rem;
    padding: 0.25rem;
`