import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { UserContext } from "./userContext";
import { SocketContext } from "./SocketContext";
import INotification from "../interfaces/notification";

export const NotificationsContext = createContext<any>([]);

const NotificationsProvider = ({children} : any) => {
    const { user } = useContext<any>(UserContext)
    const socket = useContext(SocketContext);

    const {response, reFetch} = useFetch(`/notifications/${user.Id}`);
    const [notifications, setNotifications] = useState([]);
    
    useEffect(() => {
        if(user && response) setNotifications(notifications => response.notifications)
    }, [user, response])

    useEffect(() => {
        if(socket) {
            socket.on('notification', (notification: any) => {
                reFetch();
            })
        }
    }, [socket])

    const deleteNotification = async (Notification: INotification) => {
        const res = await fetch(`/notifications/${Notification.Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(!res.ok) return

        const notificationsArr = notifications;
        const index = notificationsArr.findIndex((notification: INotification) => notification.Id === Notification.Id)
        notificationsArr.splice(index, 1)
        setNotifications([...notificationsArr]);
    };

    return(
        <NotificationsContext.Provider value={{notifications: notifications, deleteNotification: deleteNotification}}>
            {children}
        </NotificationsContext.Provider>
    )

}


const useNotifications = () => {
    const {notifications, deleteNotification} = useContext<any>(NotificationsContext)
    return {notifications, deleteNotification}
}

export {NotificationsProvider, useNotifications};