import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { UserContext } from "./userContext";


export const FriendsContext = createContext<any>([]);

const UserFriendsProvider = ({children} : any) => {
    const {user} = useContext<any>(UserContext)
    const {response, isLoading, reFetch} = useFetch(`/friendships/${user.Id}`);
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        if(user && response) setFriends(response.friends)
    }, [user, response])

    return(
        <FriendsContext.Provider value={friends}>
            {children}
        </FriendsContext.Provider>
    )

}


const useFriends = () => {
    const context = useContext(FriendsContext)
    return context
}

export {UserFriendsProvider, useFriends}