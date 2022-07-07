import styled from "styled-components";

export const RightPanelContainerStyles = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1250px) {
        width: 25%;
    }
    @media (max-width: 800px) {
        display: none;
    }
`