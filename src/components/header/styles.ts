import styled from "styled-components";


export const HeaderContainer = styled.div`
    width: 100%;
    height: 5%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const HeaderTitle = styled.div`
    font-size: 1.5rem;
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
`

export const HeaderLeftSide = styled.div`
    display: flex;
    margin-left: 0.5rem;
`

export const SearchButton = styled.button`
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
export const HeaderRightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const SearchImgContainer = styled.div`
    width: 1.1rem;
    height: 1.1rem;
`

export const SearchImg = styled.img`
    width: 100%;
`

export const NotificationBellContainer = styled.div`
    width: 1.4rem;
    height: 1.4rem;
`

export const NotificationBell = styled.img`
    width: 100%;
`

export const DropdownButton = styled.button`
    font-size: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
    }
`

export const NotificationsBtn = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    border: none;
    :hover{
        cursor: pointer;
    }
`