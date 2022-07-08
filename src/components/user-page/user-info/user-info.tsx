import { BioContainer, NameContainer, ProfileImg, ProfileImgContainer, UserInfoWrapper } from "./styles";

const UserInfo = ({user} : any) => {

    return(
        <UserInfoWrapper>
            {user.ProfileImg && <ProfileImgContainer><ProfileImg src={user.ProfileImg}/></ProfileImgContainer>}
            {!user.ProfileImg && <ProfileImgContainer><ProfileImg src="https://i.stack.imgur.com/l60Hf.png"/></ProfileImgContainer>}
            <NameContainer>{user.DisplayName}</NameContainer>
            <BioContainer>Bio Will Go Here</BioContainer>
        </UserInfoWrapper>
    )
}

export default UserInfo;