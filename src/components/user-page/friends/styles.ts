import styled from "styled-components";

export const UserFriendsContainer = styled.div`
    width: 75%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 850px) {
        width: 98%;
        height: 55%;
    }
`

export const CardsContainer = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    overflow-y: auto;
`