import styled from "styled-components";

export const EditPostModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const EditPostModalContentContainer = styled.div`
    background-color: white;
    width: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: .5rem;
    border-radius: .25rem;
`

export const EditPostForm = styled.form`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`
export const EditPostImageContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

export const EditPostImage = styled.img`
    width: 100%;
`
export const EditPostTextArea = styled.textarea`
    font-family: 'Source Sans Pro', sans-serif;
    width: 85%;
    height: 7rem;
    resize: none;
`