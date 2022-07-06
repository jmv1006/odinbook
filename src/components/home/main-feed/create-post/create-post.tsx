import { CreatePostStyles, CreatePostForm, ProfilePictureContainer, UserImage } from "./styles";

const CreatePost = ({user}: any) => {
    return(
        <CreatePostStyles>
            <ProfilePictureContainer>
                {user.ProfileImg ? <UserImage src={user.ProfileImg}/> : "No Image"}
            </ProfilePictureContainer>
            <CreatePostForm>
                <input type="text" placeholder="What's On Your Mind?"></input>
                <button>Post</button>
            </CreatePostForm>
        </CreatePostStyles>
    )
}

export default CreatePost;