import { useState } from "react"
import { useUserPageContext } from "../../../../../context/userPageContextRewrite";
import { EditBioTextArea, EditBioTextContainer, EditItemContainer, EditItemTitle } from "../styles"

const EditBio = ({user, text} : any) => {

    const [bioText, setBioText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);

    const {triggerReload} = useUserPageContext()

    const handleChange = (e: any) => {
        setBioText(e.target.value)
    };

    const handleSubmit = async () => {
        const response = await fetch(`/users/${user.Id}/profile`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Bio: bioText})
        });

        if(!response.ok) {
            return
        }
        
        const responseJSON = await response.json();
        toggleEditing();
        triggerReload();
    }

    const toggleEditing = () => {
        if(isEditing) return setIsEditing(isEditing => false)
        setIsEditing(isEditing => true)
    };

    return(
        <EditItemContainer>
            <EditItemTitle>Edit Bio</EditItemTitle>
                {isEditing && <EditBioTextArea value={bioText} onChange={handleChange}/>}
                {isEditing && <button onClick={handleSubmit}>Submit</button>}
                {!isEditing && <EditBioTextContainer>{bioText}</EditBioTextContainer>}
                {!isEditing && <button onClick={toggleEditing}>Edit</button>}
        </EditItemContainer>
    )
}

export default EditBio