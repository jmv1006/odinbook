import styled from "styled-components";

export const UserCardContainer = styled.div`
    width: 14rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    :hover {
        background-color: #f0f2f0;
    }
`

export const UserImgContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserImg = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
`

export const UserNameContainer = styled.div`
    width: 95%;
    text-align: center;
    color: black;
    text-decoration: none;
`