import styled from "styled-components";


export const PostStyles = styled.div`
    width: 95%;
    border-top: 1px solid gray;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
`

export const PostTopContainer = styled.div`
    height: 2.5rem;
    margin-left: .25rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
`

export const PostTextContainer = styled.div`
    width: 98%;
    min-height: 3.5rem;
`

export const PostBottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const PostInfoBar = styled.div`
    width: 100%;
    height: 1.5rem;
`

export const LikeAndCommentContainer = styled.div`
    width: 100%;
    height: 2rem;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ProfilePhotoContainer = styled.div`
    width: 6%;
`

export const UserImage = styled.img`
    width: 100%;
`