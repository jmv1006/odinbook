import styled from "styled-components";


export const PostStyles = styled.div`
    width: 93%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: .5rem;
    padding-top: .75rem;
    padding-left: .75rem;
    padding-right: .75rem;
    border-radius: .5rem;
`

export const PostTopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PostTopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .35rem;
`

export const PostTopRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

export const PostUserName = styled.div`
    text-decoration: none;
    color: black;
    :hover{
        font-weight: bold;
    }
`

export const PostTextContainer = styled.div`
    width: 100%;
    min-height: 2.5rem;
`

export const PostBottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const PostInfoBar = styled.div`
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    color: gray;
`

export const LikeAndCommentContainer = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 2px solid #F0F2F5;
`

export const LikeContainer = styled.div`
    width: 3rem;
`
export const LikeBtn = styled.button`
    background-color: lightgray;
    width: 100%;
    border: none;
    padding: .3rem;
    border-radius: .2rem;
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
`

export const CommentContainer = styled.div`
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`

export const ProfilePhotoContainer = styled.div`
    max-width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const UserImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 50%;
`