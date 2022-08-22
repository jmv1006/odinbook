import styled from "styled-components";

export const CreatePostStyles = styled.div`
    width: 95%;
    min-height: 5rem;
    padding: .5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFF;
    border-radius: .5rem;
`

export const CreatePostForm = styled.form`
    width: 88%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CreatePostTextInput = styled.input`
    height: 86%;
    width: 85%;
`

export const CreatePostBtn = styled.button`
    height: 100%;
    width: 13.25%;
    background-color: #7FB77E;
    border: none;
`

export const ProfilePictureContainer = styled.div`
    width: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserImage = styled.img`
    width: 3.25rem;
    height: 3.25rem;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
`