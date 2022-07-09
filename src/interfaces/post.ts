
interface IPostUser {
    Id: string,
    DisplayName: string,
    Email: string,
    ProfileImg: string
}
interface IPost {
    Id: string,
    Text: string,
    Date: string,
    Users: IPostUser
}
export default IPost;