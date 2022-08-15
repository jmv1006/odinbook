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

export const HeaderRightSide = styled.div`
    display: flex;
    align-items: center;
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