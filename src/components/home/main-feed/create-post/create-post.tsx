import { useContext, useEffect, useState } from "react";
import { CreatePostStyles, CreatePostForm, ProfilePictureContainer, UserImage } from "./styles";
import { SocketContext } from "../../../../context/SocketContext";

const CreatePost = ({user, reFetchPosts}: any) => {

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

    return(
        <CreatePostStyles>
            <ProfilePictureContainer>
                {user.ProfileImg ? <UserImage src={user.ProfileImg}/> : "No Image"}
            </ProfilePictureContainer>
            <CreatePostForm onSubmit={handleCreatePost}>
                <input type="text" placeholder="What's On Your Mind?" value={postText} onChange={handleChange} required></input>
                <button type="submit">{isLoading ? "Posting..." : "Post"}</button>
            </CreatePostForm>
        </CreatePostStyles>
    )
}

export default CreatePost;