import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { BioContainer, EditInfoBtn, NameContainer, ProfileImg, ProfileImgContainer, UserInfoWrapper } from "./styles";
import UserPageNavBar from './../nav-bar/user-page-nav-bar';
import FriendLogic from '../../shared/friend-logic/friend-logic';
import { UserPageContext } from "../../../context/userPageContext";

const UserInfo = () => {
    const {isCurrentUser, user} = useContext<any>(UserPageContext);

    return(
        <UserInfoWrapper>
            {user.ProfileImg ? <ProfileImgContainer><ProfileImg src={user.ProfileImg}/></ProfileImgContainer> : <ProfileImgContainer><ProfileImg src="https://i.stack.imgur.com/l60Hf.png"/></ProfileImgContainer>}
            {isCurrentUser ? <NameContainer>{user.DisplayName} (Me)</NameContainer> : <NameContainer>{user.DisplayName}</NameContainer>}
            <BioContainer>Bio Will Go Here</BioContainer>
            {!isCurrentUser && <FriendLogic user={user} />}
            <UserPageNavBar />
        </UserInfoWrapper>
    )
}

export default UserInfo;