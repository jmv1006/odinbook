import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { SearchBarInput, SearchPageContainer, SearchPageTitle, SearchResultsContainer } from "./styles";
import UserBar from "../../components/shared/user-bar/user-bar";

const SearchPage = () => {

    const {response: allUsersResponse} = useFetch('/users/all');

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if(allUsersResponse) setUsers(users => allUsersResponse.users)
    }, [allUsersResponse]);



    const handleChange = (e: any) => {
        setSearch(search => e.target.value)
    };

    const handleResults = () => {
        if(search === "") {
            return users.map((user: any) => 
            <UserBar key={user.Id} user={user} includeFriendLogic={true}/>
        )};

        const result = users.filter((user:any) => user.DisplayName.toUpperCase().includes(search.toUpperCase()))

        if(result.length === 0) {
            return "No Results"
        }

        return result.map((result: any) => 
            <UserBar user={result} key={result.Id} includeFriendLogic={true}/>
        )
    };

    return(
        <SearchPageContainer>
            <SearchPageTitle>Search</SearchPageTitle>
            <SearchBarInput type="text" placeholder="Search" onChange={handleChange}/>
            <SearchResultsContainer>
                {handleResults()}
            </SearchResultsContainer>
        </SearchPageContainer>
    )
}

export default SearchPage;