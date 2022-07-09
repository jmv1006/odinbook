import { useState } from "react"
import IUser from "../../../../../interfaces/user"
import { EditItemContainer, EditItemTitle } from "../styles"

type EditDisplayNameProps = {
    user: IUser
}
const EditDisplayName = ({user} : EditDisplayNameProps) => {

    const [currentDisplayName, setCurrentDisplayName] = useState(user.DisplayName);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: any) => {
        setCurrentDisplayName(currentDisplayName => e.target.value)
    }

    const toggleEditing = () => {
        if(isEditing) return setIsEditing(isEditing => false)
        setIsEditing(isEditing => true)
    };

    return(
        <EditItemContainer>
            <EditItemTitle>Display Name</EditItemTitle>
            {!isEditing && currentDisplayName}
            {!isEditing && <button onClick={toggleEditing}>Edit</button>}
            {isEditing ? 
                <>
                    <form>
                        <input type="text" value={currentDisplayName} onChange={handleChange}></input>
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