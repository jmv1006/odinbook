import styled from "styled-components";

export const CreatePostStyles = styled.div`
  width: 95%;
  min-height: 5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  border-radius: 0.5rem;
`;

export const CreatePostForm = styled.form`
  width: 85%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CreatePostTextInput = styled.input`
  height: 86%;
  width: 82%;
`;

export const CreatePostBtn = styled.button`
  height: 100%;
  width: 15%;
  border: none;
  background-color: #96bbbb;
  color: white;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ProfilePictureContainer = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;
