import styled from "styled-components";

export const DeleteCommentModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); 
`

export const DeleteCommentModalContentContainer = styled.div`
    background-color: white;
    position: absolute;
    top: 30%;
    left: 50%;
    width: 22rem;
    height: 15%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`