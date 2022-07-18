import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { UserContext } from "./userContext";
import { SocketContext } from "./SocketContext";

export const FriendsContext = createContext<any>([]);

const UserFriendsProvider = ({children} : any) => {
    const { user } = useContext<any>(UserContext)
    const socket = useContext(SocketContext);

    const {response, reFetch} = useFetch(`/friendships/${user.Id}`);
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        if(user && response) setFriends(friends => response.friends)
    }, [user, response])

    useEffect(() => {
        if(socket) {
            socket.on('notification', (notification: any) => {
                if(notification.type === 'friend-update') return reFetch()
            })
        }
    }, [socket])

    return(
        <FriendsContext.Provider value={{friends: friends, reFetchFriends: reFetch}}>
            {children}
        </FriendsContext.Provider>
    )

}


const useFriends = () => {
    const {friends, reFetchFriends} = useContext<any>(FriendsContext)
    return {friends, reFetchFriends}
}

export {UserFriendsProvider, useFriends }