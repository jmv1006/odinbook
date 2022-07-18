import styled from "styled-components";

export const UserFriendsContainer = styled.div`
    width: 75%;
    height: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 850px) {
        width: 98%;
        height: 55%;
    }
    overflow-y: auto;
`

export const CardsContainer = styled.div`
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    border: 2px solid blue;
`