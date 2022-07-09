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
    height: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
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

export const ProfilePhotoContainer = styled.div`
    max-width: 2.5rem;
`

export const UserImage = styled.img`
    width: 100%;
`