import styled from "styled-components";

export const UserPagePostsWrapper = styled.div`
    width: 75%;
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        width: 98%;
        height: 55%;
    }
`

export const PostsWrapper = styled.div`
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    overflow: auto;

`