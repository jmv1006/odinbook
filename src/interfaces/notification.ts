import IUser from './user';

interface INotification {
    Id: string, 
    Post_Id: string, 
    Notification_Type: string, 
    User: IUser
}

export default INotification