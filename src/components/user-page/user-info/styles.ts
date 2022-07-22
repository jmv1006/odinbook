import styled from "styled-components";


export const UserInfoWrapper = styled.div`
    width: 25%;
    height: 97%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    @media (max-width: 850px) {
        width: 100%;
        height: 45%;
        justify-content: space-around;
        align-items: center;
    }
`

export const ProfileImgContainer = styled.div`
    width: 14.5rem;
`
export const ProfileImg = styled.img`
    width: 13.5rem;
    height: 13.5rem;
    object-fit: cover;
    border-radius: 50%;
`

export const NameContainer = styled.div`
    width: 100%;
    font-size: 1.75rem;
    text-align: center;
`

export const BioContainer = styled.div`
    width: 95%;
    min-height: 2.5rem;
    border: 2px solid red;
    text-align: center;
`

export const EditInfoBtn = styled.button`
    width: 40%;
    background-color: #457b9d;
    color: white;
    border: none;
    padding: .25rem;
    border-radius: .25rem;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

/*
@media (max-width: 850px) {
    display: none;
}
*/