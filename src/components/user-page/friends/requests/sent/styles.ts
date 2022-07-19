import styled from "styled-components";

export const SentRequestsModal = styled.div`
    background-color: wheat;
    position: absolute;
    top: 30%;
    left: 50%;
    width: 30rem;
    height: 35%;
    transform: translate(-50%, 0);
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
    justify-content: center;
    overflow-y: auto;
`

export const CloseBtn = styled.button`

`