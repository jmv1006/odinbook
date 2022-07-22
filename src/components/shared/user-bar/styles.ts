import styled from "styled-components";

export const UserBarContainer = styled.div`
    width: 95%;
    height: 2.5rem;
    display: flex;
    background-color: #FFFF;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const UserImgContainer = styled.div`
    width: 2.5rem;
    margin-left: .25rem;
`

export const UserImg = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
`

export const UserBarFriendLogic = styled.div`
    display: flex;
`