import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "./modal/create-post-modal";
import IUser from "../../../interfaces/user";
import IPost from "../../../interfaces/post";
import { CreatePostStyles, CreatePostForm, ProfilePictureContainer, UserImage, CreatePostTextInput, CreatePostBtn } from "./styles";

type CreatePostProps = {
    user: IUser,
    addPost: (post: IPost) => void
};

const CreatePost = ({user, addPost}: CreatePostProps) => {
    const navigate = useNavigate();

    const [isToggled, setIsToggled] = useState(false);

    const navigateToUserPage = () => {
        navigate(`/user/${user.Id}`)
    }

    const toggleModal = () => {
        if(isToggled) return setIsToggled(isToggled => false)
        return setIsToggled(isToggled => true)
    };

    return(
        <>
            {isToggled && <CreatePostModal user={user} addPost={addPost} toggle={toggleModal}/>}
            <CreatePostStyles>
                <ProfilePictureContainer>
                    {user.ProfileImg && <UserImage src={user.ProfileImg} onClick={() => navigateToUserPage()}/>}
                </ProfilePictureContainer>
                <CreatePostForm onClick={toggleModal}>
                    <CreatePostTextInput placeholder="What's On Your Mind?" />
                    <CreatePostBtn onClick={toggleModal} type="button">Post</CreatePostBtn>
                </CreatePostForm>
            </CreatePostStyles>
        </>
    )
}

export default CreatePost;