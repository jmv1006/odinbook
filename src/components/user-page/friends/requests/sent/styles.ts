import styled from "styled-components";

export const SentRequestsBackground = styled.div`
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

export const SentRequestsModal = styled.div`
    background-color: white;
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: .5rem;
`


export const SentRequestsTopContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const SentRequestsTitle = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
`

export const RequestsContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    gap: .5rem;
`

export const CloseBtn = styled.button`
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
    }
`