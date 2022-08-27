import { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { useUserPageContext } from "../../../../context/userPageContext";
import EditProfilePicture from './profile-picture/edit-profile-picture';
import EditDisplayName from './display-name/edit-display-name';
import EditBio from './bio/edit-bio';
import { EditInfoCloseBtn, EditInfoTopContainer, EditUserInfoContainer, EditUserInfoContentContainer } from "./styles";

type EditUserInfoProps = {
    toggle: () => void,
}

const EditUserInfo = ({toggle} : EditUserInfoProps) => {
    const { user, updateUser } = useContext<any>(UserContext);

    const { profileInfo } = useUserPageContext();

    return(
        <EditUserInfoContainer>
            <EditUserInfoContentContainer>
                <EditInfoTopContainer>
                    <EditInfoCloseBtn onClick={() => toggle()}>x</EditInfoCloseBtn>
                </EditInfoTopContainer>
                <EditProfilePicture user={user}/>
                <EditDisplayName user={user} updateUser={updateUser} />
                <EditBio user={user} text={profileInfo.Bio}/>
            </EditUserInfoContentContainer>
        </EditUserInfoContainer>
    )
};

export default EditUserInfo