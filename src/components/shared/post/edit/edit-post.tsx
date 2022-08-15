import { useState } from "react"
import { EditPostForm, EditPostModalContainer, EditPostModalContentContainer, EditPostTextArea } from "./styles"

const EditPost = ({post, toggle} : any) => {

    const [postText, setPostText] = useState(post.Text);

    const handleChange = (e: any) => {
        setPostText((postText : string) => e.target.value)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch(`/posts/${post.Id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Text: postText})
        });

        if(!response.ok) {
            console.log("Error Updating Post")
            return 
        }
        
        toggle()
    }

    return(
        <EditPostModalContainer>
            <EditPostModalContentContainer>
                Edit Post Here
                <EditPostForm onSubmit={handleSubmit}>
                    <EditPostTextArea value={postText} onChange={handleChange} />
                    <button type="submit">Save</button>
                </EditPostForm>
                <button onClick={toggle}>X</button>  
            </EditPostModalContentContainer>
        </EditPostModalContainer>
    )
}

export default EditPost