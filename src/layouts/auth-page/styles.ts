import styled from "styled-components";

export const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const GuestSignInButton = styled.button`
  width: 20rem;
  height: 2rem;
  background-color: #96bbbb;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SignUpButton = styled.button`
  width: 20rem;
  height: 2rem;
  background-color: #96bbbb;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
