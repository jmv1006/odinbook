
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
    Image: string | null,
    Users: IPostUser
}
export default IPost;