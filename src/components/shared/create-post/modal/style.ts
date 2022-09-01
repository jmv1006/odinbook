import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const CreatePostModalStyle = styled.div`
  width: 70%;
  height: 28%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.75rem;
`;

export const CreatePostModalTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CreatePostModalTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ExitModalBtn = styled.button`
  background-color: white;
  border: none;
  font-size: 1rem;
`;

export const CreatePostFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 80%;
  gap: 0.5rem;
`;

export const CreatePostFormText = styled.textarea`
  border: 2px solid black;
  resize: none;
  width: 98%;
  height: 50%;
  font-family: "Source Sans Pro", sans-serif;
`;

export const CreatePostFormFile = styled.input``;

export const CreatePostBtn = styled.button`
  background-color: #96bbbb;
  color: white;
  border: none;
  height: 1.5rem;
  border-radius: 0.25rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
