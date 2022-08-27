import { useState } from "react";
import { useUserPageContext } from "../../../context/userPageContext";
import UserPageNavBar from './../nav-bar/user-page-nav-bar';
import FriendLogic from '../../shared/friend-logic/friend-logic';
import EditUserInfo from "./edit/edit-user-info";
import { BioContainer, EditInfoBtn, FriendLogicContainer, NameContainer, ProfileImg, ProfileImgContainer, UserInfoWrapper } from "./styles";
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
            {!isCurrentUser && <FriendLogicContainer><FriendLogic user={user} /></FriendLogicContainer>}
            <UserPageNavBar />
        </UserInfoWrapper>
    )
}

export default UserInfo;