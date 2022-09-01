import styled from "styled-components";

export const NotificationBarContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem;
  :hover {
    cursor: pointer;
    background-color: #f0f2f0;
  }
`;

export const UserImgContainer = styled.div`
  width: 2.5rem;
  margin-left: 0.25rem;
`;

export const UserImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const DeleteNotificationBtn = styled.button`
  background-color: #96bbbb;
  width: 1.7rem;
  color: white;
  border: none;
  padding: 0.25rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
