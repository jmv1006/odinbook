import { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { EditInfoCloseBtn, EditInfoTitle, EditInfoTopContainer, EditUserInfoContainer, EditUserInfoContentContainer, ProfileImg, ProfileImgContainer } from "./styles";
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