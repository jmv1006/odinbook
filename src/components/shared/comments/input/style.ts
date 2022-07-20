import styled from "styled-components";


export const CommentInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0.5rem;
`

export const CommentInputForm = styled.form`
    width: 90%;
    display: flex;
    justify-content: center;
`

export const UserImageContainer = styled.div`
    width: 5%;
    display: flex;
`

export const UserImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    clip-path: circle();
`

export const TextInputBox = styled.input`
    width: 85%;
    height: 1.5rem;
`

export const PostCommentBtn = styled.button`
    width: 15%;
`