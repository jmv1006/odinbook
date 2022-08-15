import styled from "styled-components";

export const SignUpModal = styled.div`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    gap: 1rem;
`
export const SignUpTopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const SignUpTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
`

export const ExitBtnContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;
    width: 75%;
`

export const ProfileInfoContainer = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 75%;
`

export const BioTextArea = styled.textarea`
    resize: none;
    width: 75%;
    height: 3rem;
    font-family: 'Source Sans Pro', sans-serif
`

export const ProfileInfoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 75%;
`