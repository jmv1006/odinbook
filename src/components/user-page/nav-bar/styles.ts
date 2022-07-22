import styled from "styled-components";

export const UserPageNavBarContainer = styled.div`
    background-color: white;
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 850px) {
        flex-direction: column;
    }
    padding: .25rem;
    border-radius: .25rem;
`