import { useState } from "react"
import IUser from "../../../../../interfaces/user"
import { EditItemContainer, EditItemTitle } from "../styles"

type EditDisplayNameProps = {
    user: IUser
    updateUser: (user: any) => void
}
const EditDisplayName = ({user, updateUser} : EditDisplayNameProps) => {

    const [currentDisplayName, setCurrentDisplayName] = useState(user.DisplayName);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: any) => {
        setCurrentDisplayName(currentDisplayName => e.target.value)
    }

    const toggleEditing = () => {
        if(isEditing) return setIsEditing(isEditing => false)
        setIsEditing(isEditing => true)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch(`/users/${user.Id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: user.Email,
                DisplayName: currentDisplayName
            })
        });

        if(!response.ok) {
            return
        }
        
        const responseJSON = await response.json();

        await updateUser((prevUser : any) => responseJSON.updatedUser)
        setIsEditing(false);
    }

    return(
        <EditItemContainer>
            <EditItemTitle>Display Name</EditItemTitle>
            {!isEditing && currentDisplayName}
            {!isEditing && <button onClick={toggleEditing}>Edit</button>}
            {isEditing ? 
                <>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={currentDisplayName} onChange={handleChange}></input>
                        <button type="submit">Change</button>
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            :
                null
            }
        </EditItemContainer>
    )
}

export default EditDisplayName;