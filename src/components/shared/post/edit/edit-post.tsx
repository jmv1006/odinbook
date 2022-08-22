import { useState } from "react"
import IPost from "../../../../interfaces/post"
import { EditPostForm, EditPostImage, EditPostImageContainer, EditPostModalContainer, EditPostModalContentContainer, EditPostTextArea, EditPostTopContainer } from "./styles"

type EditPostProps = {
    post: IPost,
    toggle: () => void,
    updateCB: any,
    dropDownToggle: () => void
};

const EditPost = ({post, toggle, updateCB, dropDownToggle} : EditPostProps) => {

    const [postText, setPostText] = useState(post.Text);
    const [image, setImage] = useState<any>(post.Image);
    const [file, setFile] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [addImgToggled, setAddImgToggled] = useState(false);

    const handleChange = (e: any) => {
        setPostText((postText : string) => e.target.value)
    };

    const handleChangeImage = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
            setFile(e.target.files[0]);
        }
    }

    const handleSubmit = async () => {
        setIsLoading(isLoading => true)
        const formData = new FormData()

        if(file) {
            formData.append('image', file)
            formData.append('deleteImage', 'true')
        } else {
            formData.append('deleteImage', 'false')
        }

        formData.append('Text', postText);

        const response = await fetch(`/posts/${post.Id}`, {
            method: "PUT",
            body: formData
        });

        if(!response.ok) {
            const responseJSON = await response.json()
            setIsLoading(isLoading => false)
            return 
        }
        
        const responseJSON = await response.json()
        updateCB(responseJSON.updatedPost)
        toggle()
        dropDownToggle()
    };

    const handleSubmitRemoveImage = async () => {
        setIsLoading(isLoading => true)
        const formData = new FormData()

        formData.append('Text', postText);
        formData.append('deleteImage', 'true')

        const response = await fetch(`/posts/${post.Id}`, {
            method: "PUT",
            body: formData
        });

        if(!response.ok) {
            const responseJSON = await response.json()
            setIsLoading(isLoading => false)
            return 
        }
        
        const responseJSON = await response.json()
        updateCB(responseJSON.updatedPost)
        toggle()
        dropDownToggle()
    };

    const toggleAddImage = () => {
        setFile(null)
        if(addImgToggled) return setAddImgToggled(addImgToggled => false)
        return setAddImgToggled(addImgToggled => true)
    };

    return(
        <EditPostModalContainer>
            <EditPostModalContentContainer>
                {isLoading ? "Loading" : 
                    <>
                        <EditPostTopContainer>
                            <button onClick={toggle}>X</button>
                        </EditPostTopContainer>
                        <strong>Edit Post Here</strong>
                        <EditPostForm onSubmit={handleSubmit}>
                            <EditPostTextArea value={postText} onChange={handleChange} />
                        </EditPostForm>
                        {image ?
                            <EditPostImageContainer>
                                Post Image:
                                <EditPostImage src={image} />
                                <input type="file" onChange={handleChangeImage}/>
                                <button onClick={handleSubmitRemoveImage}>Remove Image From Post</button>
                            </EditPostImageContainer>
                            :
                            <>
                                {!addImgToggled && <button onClick={toggleAddImage}>Add Image</button>}
                                {addImgToggled && <input type="file" onChange={handleChangeImage}/>} 
                            </>
                        }
                        <button onClick={handleSubmit}>Save</button>
                    </>
                } 
            </EditPostModalContentContainer>
        </EditPostModalContainer>
    )
}

export default EditPost