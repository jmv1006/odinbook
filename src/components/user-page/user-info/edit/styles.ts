import styled from "styled-components"

export const EditUserInfoContainer = styled.div`
    background-color: white;
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 33rem;
    height: 50rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

export const EditInfoTitle = styled.div`
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid black;
`

export const EditItemContainer = styled.div`    
    border: 2px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const EditItemTitle = styled.div`
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
`

export const ProfileImgContainer = styled.div`
    width: 13rem;
`
export const ProfileImg = styled.img`
    width: 100%;
    border-radius: 10%;
`

export const EditBioTextArea = styled.textarea`
    border: 2px solid red;
    resize: none;
    width: 60%;
    height: 5rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
`

export const EditBioTextContainer = styled.div`
    text-align: center;
    width: 60%;
    height: 2rem;
`