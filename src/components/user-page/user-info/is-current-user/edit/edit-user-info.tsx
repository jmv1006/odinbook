import { useContext } from "react";
import { UserContext } from "../../../../../context/userContext";
import { EditInfoTitle, EditUserInfoContainer, ProfileImg, ProfileImgContainer } from "./styles";
import EditProfilePicture from './profile-picture/edit-profile-picture';
import EditDisplayName from './display-name/edit-display-name';

type EditUserInfoProps = {
    toggle: () => void,
}

const EditUserInfo = ({toggle} : EditUserInfoProps) => {
    const { user, updateUser } = useContext<any>(UserContext);

    return(
        <EditUserInfoContainer>
            <EditInfoTitle>Edit Info</EditInfoTitle>
            <EditProfilePicture user={user}/>
            <EditDisplayName user={user} updateUser={updateUser} />
            <button onClick={() => toggle()}>x</button>
        </EditUserInfoContainer>
    )
};

export default EditUserInfo