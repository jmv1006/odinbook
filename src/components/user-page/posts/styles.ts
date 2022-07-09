import styled from "styled-components";

export const UserPagePostsWrapper = styled.div`
    width: 75%;
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        width: 98%;
        height: 65%;
    }
`

export const PostsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    overflow: auto;
`

/*
  @media (max-width: 850px) {
        width: 100%;
    }
    */