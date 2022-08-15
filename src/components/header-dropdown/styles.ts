import styled from "styled-components";

export const HeaderDropDownContainer = styled.div`
    background-color: #F0F2F5;
    position: absolute;
    top: 3.8%;
    right: 1;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    gap: .5rem
`

export const HeaderDropDownItem = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
