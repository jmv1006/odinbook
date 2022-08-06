import styled from "styled-components";

export const IndividualComment = styled.div`
    width: 100%;
    min-height: 2.25rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`

export const UserImgContainer = styled.div`
    width: 3rem;
`

export const UserImg = styled.img`
    width: 2rem;
    height: 2rem;
    clip-path: circle();
    object-fit: cover;
    :hover{
        cursor: pointer;
    }
`


export const NameAndTextContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const CommentName = styled.div`
    font-size: .85rem;
    color: gray;
    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const CommentText = styled.div`
    background-color: lightgray;
    padding: 0.25rem;
    max-width: 95%;
    overflow-wrap: break-word;
    border-radius: .5rem;
`

export const DeleteCommentBtn = styled.button`
    
`
