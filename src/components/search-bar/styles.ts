import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border: 1px solid gray;
  width: 40%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SearchResult = styled.div`
  border: 2px solid blue;
  width: 95%;
  height: 2rem;
`;

export const SearchBarTopContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
`;

export const ResultsContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  overflow: auto;
`;

export const SearchExitBtn = styled.button`
  width: 2rem;
  background-color: #96bbbb;
  color: white;
  border: none;
  padding: 0.25rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
