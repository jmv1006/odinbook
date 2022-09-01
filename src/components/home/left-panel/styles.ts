import styled from "styled-components";

export const LeftPanelContainerStyles = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const LeftPanelNotificationsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
