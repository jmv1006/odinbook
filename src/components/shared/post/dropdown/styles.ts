import styled from "styled-components";

export const PostDropDownContainer = styled.div`
    position: relative;
`

export const PostDropDownMenu = styled.div`
    background-color: #F0F2F5;
    position: absolute;
    top: 100%; /* Bottom of button */
    right: 0;
    width: 15rem;
    display: flex;
    flex-direction: column;
    gap: .25rem;
`


export const PostDropDownMenuItem = styled.div`
    text-align: center;
    padding: .1rem;
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
