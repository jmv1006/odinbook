import styled from "styled-components";

export const UserFriendsContainer = styled.div`
    border: 2px solid red;
    width: 75%;
    height: 98%;
    @media (max-width: 850px) {
        width: 98%;
        height: 65%;
    }
`

export const CardsContainer = styled.div`
    border: 2px solid blue;
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    gap: 1.5rem;
`