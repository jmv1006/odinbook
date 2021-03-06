import styled from "styled-components";

export const UserCardContainer = styled.div`
    border: 2px solid aqua;
    width: 14rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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