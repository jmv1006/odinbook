import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { SearchPageContainer } from "./styles";

const SearchPage = () => {

    const {response, isLoading, reFetch} = useFetch('/users/all');

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(response) setUsers(users => response.users)
    }, [response])

    const mappedUsers = users.map((user: any) => 
        <div key={user.Id}>{user.DisplayName}</div>
    );

    return(
        <SearchPageContainer>
            {mappedUsers}
            <div>
                Users that I am not friends with; add friend request
            </div>
        </SearchPageContainer>
    )
}

export default SearchPage