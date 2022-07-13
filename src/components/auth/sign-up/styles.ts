import styled from "styled-components";

export const SignUpModal = styled.div`
    border: 2px solid red;
    position: fixed;
    background-color: wheat;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 25rem;
    height: 30rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const SignUpForm = styled.form`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
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

export const ProfileInfoForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 75%;
`