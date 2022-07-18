import styled from "styled-components";

export const IndividualComment = styled.div`
    width: 100%;
    min-height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;

`

export const UserImgContainer = styled.div`
    width: 4.25%;
    margin-left: .25rem;
    height: 100%;

`

export const UserImg = styled.img`
    margin-top: .1rem;
    width: 100%;
`


export const NameAndTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const Name = styled.div`
    font-size: .85rem;
    color: gray;
`

export const CommentText = styled.div`
    background-color: lightgray;
    padding: 0.25rem;
`
