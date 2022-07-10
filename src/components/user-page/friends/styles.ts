import styled from "styled-components";

export const UserFriendsContainer = styled.div`
    width: 75%;
    height: 98%;
    @media (max-width: 850px) {
        width: 98%;
        height: 60%;
    }
`

export const CardsContainer = styled.div`
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