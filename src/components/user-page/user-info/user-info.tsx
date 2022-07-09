import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { BioContainer, NameContainer, ProfileImg, ProfileImgContainer, UserInfoWrapper } from "./styles";
import IUser from "../../../interfaces/user";
import EditUserInfo from './edit/edit-user-info';

type UserInfoPropTypes = {
    user: IUser
};

const UserInfo = ({user} : UserInfoPropTypes) => {
    const currentUser = useContext<any>(UserContext);

    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [editingMode, setEditingMode] = useState(false);

    useEffect(() => {
        if(currentUser.Id === user.Id) setIsCurrentUser(currentUser => true)
    }, [currentUser, user]);

    const toggleEditingMode = () => {
        if(editingMode) return setEditingMode(editingMode => false)
        setEditingMode(editingMode => true)
    };

    return(
        <UserInfoWrapper>
            {user.ProfileImg && <ProfileImgContainer><ProfileImg src={user.ProfileImg}/></ProfileImgContainer>}
            {!user.ProfileImg && <ProfileImgContainer><ProfileImg src="https://i.stack.imgur.com/l60Hf.png"/></ProfileImgContainer>}
            {isCurrentUser && <button onClick={toggleEditingMode}>Edit Info</button>}
            {isCurrentUser && editingMode ? <EditUserInfo toggle={toggleEditingMode}/> : null}
            <NameContainer>{user.DisplayName}</NameContainer>
            <BioContainer>Bio Will Go Here</BioContainer>
        </UserInfoWrapper>
    )
}

export default UserInfo;