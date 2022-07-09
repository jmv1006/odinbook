import IUser from "./user";

interface IComment {
    Id: string,
    Post: string,
    Date: string,
    Text: string,
    Users: IUser
}

export default IComment;