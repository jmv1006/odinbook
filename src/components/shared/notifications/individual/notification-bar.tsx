import INotification from "../../../../interfaces/notification";
import { NotificationBarContainer, UserImg, UserImgContainer } from "./style";

type NotificationBarProps = {
    notification: INotification,
    deleteMe: (Notification: INotification) => void
}

const NotificationBar = ({notification, deleteMe} : NotificationBarProps) => {
    const deleteNotification = () => {
        deleteMe(notification)
    };
    
    return(
        <NotificationBarContainer>
            <UserImgContainer>
                {notification.User.ProfileImg && <UserImg src={notification.User.ProfileImg} alt="user image" />}
            </UserImgContainer>
            {notification.User.DisplayName} {notification.Notification_Type === 'like' ? "liked" : "commented on"} your post.
            <button onClick={deleteNotification}>X</button>
        </NotificationBarContainer>
    )
}

export default NotificationBar