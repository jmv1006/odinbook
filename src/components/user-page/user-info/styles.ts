import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  width: 25%;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 850px) {
    width: 100%;
    height: 45%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const ProfileImgContainer = styled.div`
  width: 14.5rem;
  @media (max-width: 850px) {
    width: 11rem;
    height: 11rem;
  }
`;
export const ProfileImg = styled.img`
  width: 13.5rem;
  height: 13.5rem;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 850px) {
    width: 11rem;
    height: 11rem;
  }
`;

export const NameContainer = styled.div`
  width: 100%;
  font-size: 1.75rem;
  text-align: center;
`;

export const BioContainer = styled.div`
  width: 95%;
  max-height: 3rem;
  text-align: center;
  overflow-y: auto;
`;

export const EditInfoBtn = styled.button`
  width: 40%;
  background-color: #96bbbb;
  color: white;
  border: none;
  padding: 0.25rem;
  border-radius: 0.25rem;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const FriendLogicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/*
@media (max-width: 850px) {
    display: none;
}
*/
