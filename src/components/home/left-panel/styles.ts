import styled from "styled-components";


export const LeftPanelContainerStyles = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 650px) {
        display: none;
    }
`