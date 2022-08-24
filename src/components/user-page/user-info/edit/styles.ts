import styled from "styled-components"

export const EditUserInfoContainer = styled.div`
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

export const EditUserInfoContentContainer = styled.div`
    background-color: white;
    position: fixed;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem;
    gap: .25rem;
    border-radius: 0.5rem;
`
export const EditInfoCloseBtn = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    font-weight: normal;
    :hover{
        cursor: pointer;
    }
`

export const EditInfoTopContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const EditInfoTitle = styled.div`
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    font-weight: bold;
`

export const EditItemContainer = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .25rem;
`
export const EditItemTitle = styled.div`
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
`

export const ProfileImgContainer = styled.div`
    width: 12.5rem;
    height: 12.5rem;
`
export const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`

export const EditBioTextArea = styled.textarea`
    resize: none;
    width: 60%;
    height: 5rem;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    overflow-y: auto;
`

export const EditBioTextContainer = styled.div`
    text-align: center;
    width: 60%;
    height: 2.5rem;
    overflow-y: auto;
`