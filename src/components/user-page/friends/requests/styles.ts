import styled from "styled-components";

export const RequestsContainer = styled.div`
    width: 75%;
    height: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 850px) {
        width: 98%;
        height: 55%;
    }
    overflow-y: auto;
    border: 2px solid red;
`