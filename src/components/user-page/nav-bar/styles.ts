import styled from "styled-components";

export const UserPageNavBarContainer = styled.div`
    border: 2px solid blue;
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 850px) {
        flex-direction: column;
    }
`