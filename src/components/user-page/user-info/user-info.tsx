import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { BioContainer, EditInfoBtn, NameContainer, ProfileImg, ProfileImgContainer, UserInfoWrapper } from "./styles";
import IUser from "../../../interfaces/user";
import UserPageNavBar from './../nav-bar/user-page-nav-bar';

type UserInfoPropTypes = {
    user: IUser
};

const UserInfo = ({ user } : UserInfoPropTypes) => {
    const { user: currentUser } = useContext<any>(UserContext);

    const [isCurrentUser, setIsCurrentUser] = useState(false);

    useEffect(() => {
        if(currentUser.Id === user.Id) return setIsCurrentUser(currentUser => true)
        setIsCurrentUser(false)
    }, [user]);


    return(
        <UserInfoWrapper>
            {isCurrentUser && <EditInfoBtn>Edit</EditInfoBtn>}
            {user.ProfileImg && <ProfileImgContainer><ProfileImg src={user.ProfileImg}/></ProfileImgContainer>}
            {!user.ProfileImg && <ProfileImgContainer><ProfileImg src="https://i.stack.imgur.com/l60Hf.png"/></ProfileImgContainer>}
            <NameContainer>{user.Id === currentUser.Id ? `${user.DisplayName} (Me)` :  `${user.DisplayName}`}</NameContainer>
            <BioContainer>Bio Will Go Here</BioContainer>
            <UserPageNavBar />
        </UserInfoWrapper>
    )
}

export default UserInfo;