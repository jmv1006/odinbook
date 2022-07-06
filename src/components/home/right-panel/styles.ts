import styled from "styled-components";

export const RightPanelContainerStyles = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 650px) {
        display: none;
    }
`