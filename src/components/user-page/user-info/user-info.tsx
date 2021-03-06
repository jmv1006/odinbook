import { useState } from "react";
import { BioContainer, EditInfoBtn, NameContainer, ProfileImg, ProfileImgContainer, UserInfoWrapper } from "./styles";
import UserPageNavBar from './../nav-bar/user-page-nav-bar';
import FriendLogic from '../../shared/friend-logic/friend-logic';
import EditUserInfo from "./edit/edit-user-info";
import { useUserPageContext } from "../../../context/userPageContextRewrite";

const UserInfo = () => {
    const {isCurrentUser, user, profileInfo} = useUserPageContext();

    const [isOpen, setIsOpen] = useState(false);

    const toggleEditWindow = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    };

    return(
        <UserInfoWrapper>
            {user.ProfileImg && <ProfileImgContainer><ProfileImg src={user.ProfileImg}/></ProfileImgContainer>}
            {isCurrentUser ? <NameContainer>{user.DisplayName} (Me)</NameContainer> : <NameContainer>{user.DisplayName}</NameContainer>}
            <BioContainer>{profileInfo.Bio}</BioContainer>
            {isCurrentUser && <EditInfoBtn onClick={toggleEditWindow}>Edit Profile</EditInfoBtn>}
            {isOpen && <EditUserInfo toggle={toggleEditWindow} />}
            {!isCurrentUser && <div><FriendLogic user={user} /></div>}
            <UserPageNavBar />
        </UserInfoWrapper>
    )
}

export default UserInfo;