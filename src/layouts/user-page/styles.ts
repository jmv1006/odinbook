import styled from "styled-components";

export const UserPageContainer = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    background-color:  #F0F2F5;
`
