import styled from "styled-components";

export const DeleteFriendModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DeleteFriendModalContentContainer = styled.div`
    background-color: white;
    padding: .5rem;
    width: 65%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`