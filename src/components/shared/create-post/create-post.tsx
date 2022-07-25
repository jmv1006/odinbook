import { useContext, useState } from "react";
import { CreatePostStyles, CreatePostForm, ProfilePictureContainer, UserImage, CreatePostTextInput, CreatePostBtn } from "./styles";
import { SocketContext } from "../../../context/SocketContext";
import { useNavigate } from "react-router-dom";

const CreatePost = ({user, reFetchPosts}: any) => {
    const navigate = useNavigate();

    const socket = useContext(SocketContext);
    const [postText, setPostText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: any) => {
        setPostText(postText => e.target.value)
    }

    const handleCreatePost = async (e: any) => {
        setIsLoading(true)
        e.preventDefault();
        const res = await fetch(`/posts/${user.Id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Text: postText})
        })
        
        if(!res.ok) return setIsLoading(false)

        setIsLoading(false);
        setPostText("");
        socket.emit('post', user.Id);
        reFetchPosts();
        //Post Successfully Created REFETCH!!!!!
    };

    const navigateToUserPage = () => {
        navigate(`/user/${user.Id}`)
    }

    return(
        <CreatePostStyles>
            <ProfilePictureContainer>
                {user.ProfileImg && <UserImage src={user.ProfileImg} onClick={() => navigateToUserPage()}/>}
            </ProfilePictureContainer>
            <CreatePostForm onSubmit={handleCreatePost}>
                <CreatePostTextInput type="text" placeholder="What's On Your Mind?" value={postText} onChange={handleChange} maxLength={5000} required />
                <CreatePostBtn type="submit">{isLoading ? "Posting..." : "Post"}</CreatePostBtn>
            </CreatePostForm>
        </CreatePostStyles>
    )
}

export default CreatePost;