import { useNavigate } from "react-router-dom";
import INotification from "../../../../interfaces/notification";
import { NotificationBarContainer, UserImg, UserImgContainer } from "./style";

type NotificationBarProps = {
    notification: INotification,
    deleteMe: (Notification: INotification) => void
}

const NotificationBar = ({notification, deleteMe} : NotificationBarProps) => {
    const navigate = useNavigate();

    const deleteNotification = () => {
        deleteMe(notification)
    };

    const navigateToPost = () => {
        navigate(`/post/${notification.Post_Id}`)
    };
    
    return(
        <NotificationBarContainer>
            <UserImgContainer>
                {notification.User.ProfileImg && <UserImg src={notification.User.ProfileImg} alt="user image" />}
            </UserImgContainer>
            <div onClick={navigateToPost}>{notification.User.DisplayName} {notification.Notification_Type === 'like' ? "liked" : "commented on"} your post.</div>
            <button onClick={deleteNotification}>X</button>
        </NotificationBarContainer>
    )
}

export default NotificationBar