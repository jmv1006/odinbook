import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const CreatePostModalStyle = styled.div`
    width: 70%;
    height: 35%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
export const CreatePostFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 80%;
    gap: .5rem;
`

export const CreatePostFormText = styled.textarea`
    border: 2px solid black;
    resize: none;
    height: 50%;
    font-family: 'Source Sans Pro', sans-serif;
`

export const CreatePostFormFile = styled.input`
`