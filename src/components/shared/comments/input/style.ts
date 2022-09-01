import styled from "styled-components";

export const CommentInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.5rem;
  gap: 0.5rem;
`;

export const CommentInputForm = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserImageContainer = styled.div`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  clip-path: circle();
  @media (max-width: 400px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const TextInputBox = styled.input`
  width: 85%;
  height: 1.5rem;
`;

export const PostCommentBtn = styled.button`
  width: 12%;
  height: 1.9rem;
  border: none;
  background-color: #96bbbb;
  color: white;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
