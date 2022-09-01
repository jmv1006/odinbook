import styled from "styled-components";

export const DeleteFriendModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteFriendModalContentContainer = styled.div`
  background-color: white;
  padding: 0.5rem;
  width: 50%;
  text-align: center;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
`;

export const DeleteFriendBtnsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DeleteFriendBtn = styled.button`
  background-color: #96bbbb;
  color: white;
  border: none;
  padding: 0.2rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
