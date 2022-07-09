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
        height: 35%;
        justify-content: space-around;
        align-items: center;
    }
`

export const ProfileImgContainer = styled.div`
    width: 13rem;
`
export const ProfileImg = styled.img`
    width: 100%;
    border-radius: 10%;
`

export const NameContainer = styled.div`
    width: 100%;
    font-size: 1.75rem;
    text-align: center;
`

export const BioContainer = styled.div`
    width: 85%;
    min-height: 3.5rem;
    border: 2px solid red;
    text-align: center;
`
/*
@media (max-width: 850px) {
    display: none;
}
*/