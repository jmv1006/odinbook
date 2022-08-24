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
    color: black;
    :hover{
        text-decoration: underline;
    }
`

export const HeaderLeftSide = styled.div`
    display: flex;
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
    align-items: flex-end;
    justify-content: flex-end;
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
    font-size: .95rem;
    font-weight: normal;
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`