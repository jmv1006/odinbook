import styled from "styled-components";

export const UserPageContainer = styled.div`
    width: 100%;
    height: 95%;
    max-height: 95%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    background-color:  #F0F2F5;
    overflow-y: auto;
    gap: .5rem;
`

export const NonFriendInfo = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.15rem;
    font-weight: bold;
    text-decoration: underline;
`