import { useState } from "react"
import { EditItemContainer, EditItemTitle } from "../styles"

const EditBio = ({user, text} : any) => {

    const [bioText, setBioText] = useState(text);


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
        console.log(responseJSON)
    }

    return(
        <EditItemContainer>
            <EditItemTitle>Edit Bio</EditItemTitle>
            <div>
                <textarea value={bioText} onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </EditItemContainer>
    )
}

export default EditBio