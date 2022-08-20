import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { UserContext } from "./userContext";
import { SocketContext } from "./SocketContext";

export const NotificationsContext = createContext<any>([]);

const NotificationsProvider = ({children} : any) => {
    const { user } = useContext<any>(UserContext)
    const socket = useContext(SocketContext);

    const {response} = useFetch(`/notifications/${user.Id}`);
    const [notifications, setNotifications] = useState([]);
    
    useEffect(() => {
        if(user && response) setNotifications(notifications => response.notifications)
    }, [user, response])

    return(
        <NotificationsContext.Provider value={{notifications: notifications}}>
            {children}
        </NotificationsContext.Provider>
    )

}


const useNotifications = () => {
    const {notifications} = useContext<any>(NotificationsContext)
    return {notifications}
}

export {NotificationsProvider, useNotifications};