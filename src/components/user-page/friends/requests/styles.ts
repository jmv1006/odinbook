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
`;

export const SentRequestsBtn = styled.button`
  padding: 0.4rem;
  background-color: #96bbbb;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
