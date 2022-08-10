import styled from "styled-components"

export const SearchPageContainer = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow: auto;
`

export const SearchPageTitle = styled.div`
    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
`

export const SearchBarInput = styled.input`
    width: 75%;
    min-height: 2rem;
`

export const SearchResultsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: .75rem;
`