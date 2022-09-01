import styled from "styled-components";

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 0.5rem;
`;

export const SignInErrorMsg = styled.div`
  color: red;
  text-align: center;
`;

export const SignInInput = styled.input`
  height: 2rem;
`;

export const SignInBtn = styled.button`
  height: 2rem;
  border: none;
  background-color: #96bbbb;
  color: white;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
