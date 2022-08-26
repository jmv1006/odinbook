import { useNotifications } from "../../../context/notificationsContext"
import INotification from "../../../interfaces/notification";
import NotificationBar from "./individual/notification-bar";
import { NotificationsContainer } from "./styles";

const Notifications = () => {
    const {notifications, deleteNotification} = useNotifications();

    const mappedNotifications = notifications.map((notification: INotification) => 
        <NotificationBar key={notification.Id} notification={notification} deleteMe={deleteNotification}/>
    );

    return(
        <NotificationsContainer>
            {mappedNotifications}
            {mappedNotifications.length === 0 && "No Notifications"}
        </NotificationsContainer>
    )
}

export default Notifications