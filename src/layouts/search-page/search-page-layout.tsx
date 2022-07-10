import { useContext, useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { SearchPageContainer } from "./styles";
import UserBar from "../../components/shared/user-bar/user-bar";

const SearchPage = () => {

    const {response: allUsersResponse, isLoading: allUsersLoading, reFetch: allUsersRefetch} = useFetch('/users/all');

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(allUsersResponse) setUsers(users => allUsersResponse.users)
    }, [allUsersResponse])


    const mappedUsers = users.map((user: any) => 
        <UserBar key={user.Id} user={user} />
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