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

export const CreatePostModalTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const ExitModalBtn = styled.button`
    background-color: white;
    border: none;
    font-size: 1rem;
`

export const CreatePostFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 80%;
    gap: .5rem;
`

export const CreatePostFormText = styled.textarea`
    border: 2px solid black;
    resize: none;
    width: 100%;
    height: 50%;
    font-family: 'Source Sans Pro', sans-serif;
`

export const CreatePostFormFile = styled.input`
`

export const CreatePostBtn = styled.button`
    background-color: #7FB77E;
    border: none;
    height: 1.5rem;
    border-radius: 0.25rem;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`