import { useState } from "react";
import EditUserInfo from "./edit/edit-user-info";
import { IsCurrentUserContainer } from "./styles";

const IsCurrentUserDetails = ({user} : any) => {
    const [editingMode, setEditingMode] = useState(false);

    const toggleEditingMode = () => {
        if(editingMode) return setEditingMode(editingMode => false)
        setEditingMode(editingMode => true)
    };

    return( 
        <IsCurrentUserContainer>
            <div>My Friends</div>
            <button onClick={toggleEditingMode}>Edit Info</button>
            {editingMode ? <EditUserInfo toggle={toggleEditingMode}/> : null}
        </IsCurrentUserContainer>
    )
}

export default IsCurrentUserDetails;