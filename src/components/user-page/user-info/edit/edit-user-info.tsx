import { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { EditInfoTitle, EditUserInfoContainer, EditUserInfoContentContainer, ProfileImg, ProfileImgContainer } from "./styles";
import EditProfilePicture from './profile-picture/edit-profile-picture';
import EditDisplayName from './display-name/edit-display-name';
import EditBio from './bio/edit-bio';
import { useUserPageContext } from "../../../../context/userPageContext";

type EditUserInfoProps = {
    toggle: () => void,
}

const EditUserInfo = ({toggle} : EditUserInfoProps) => {
    const { user, updateUser } = useContext<any>(UserContext);

    const { profileInfo } = useUserPageContext();

    return(
        <EditUserInfoContainer>
            <EditUserInfoContentContainer>
                <EditInfoTitle>Edit Profile</EditInfoTitle>
                <EditProfilePicture user={user}/>
                <EditDisplayName user={user} updateUser={updateUser} />
                <EditBio user={user} text={profileInfo.Bio}/>
                <button onClick={() => toggle()}>x</button>
            </EditUserInfoContentContainer>
        </EditUserInfoContainer>
    )
};

export default EditUserInfo