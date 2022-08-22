import { useState } from "react";
import { useContext } from "react";
import { SocketContext } from "../../../../context/SocketContext";
import { CreatePostBtn, CreatePostFormContainer, CreatePostFormFile, CreatePostFormText, CreatePostModalStyle, CreatePostModalTop, ExitModalBtn, ModalBackground } from "./style";

const CreatePostModal = ({user, addPost, toggle}: any) => {

    const socket = useContext(SocketContext);
    const [postText, setPostText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState<any>(null)

    const handleChange = (e: any) => {
        setPostText(postText => e.target.value)
    }

    const handleChangeFile = (e: any) => {
        setFile(e.target.files[0])
    };

    const handleCreatePost = async (e: any) => {
        setIsLoading(true)
        e.preventDefault();

        const formData = new FormData()
        if(file) {
            formData.append('image', file);
        }
        formData.append('Text', postText);

        const res = await fetch(`/posts/${user.Id}`, {
            method: "POST",
            body: formData
        })
        
        if(!res.ok) {
            setIsLoading(false)
            return
        } 
        const responseJSON = await res.json();

        setIsLoading(false);
        setPostText("");
        socket.emit('post', user.Id);
        addPost(responseJSON.createdPost);
        toggle()
    };

    return(
        <ModalBackground>
            <CreatePostModalStyle>
                <CreatePostModalTop>
                    {!isLoading && <ExitModalBtn onClick={toggle}>X</ExitModalBtn>}
                </CreatePostModalTop>
                <h2>Create A Post</h2>
                {!isLoading ? 
                    <CreatePostFormContainer onSubmit={handleCreatePost}>
                        <CreatePostFormText onChange={handleChange} value={postText} placeholder="Text Here" autoFocus required />
                        Add Image:
                        <CreatePostFormFile type="file" accept="image/*" onChange={handleChangeFile} />
                        <CreatePostBtn type="submit">Create Post</CreatePostBtn>
                    </CreatePostFormContainer>
                : "Loading"}
            </CreatePostModalStyle>
        </ModalBackground>
    )
}

export default CreatePostModal