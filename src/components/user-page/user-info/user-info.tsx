import { UserInfoWrapper } from "./styles";

const UserInfo = ({user} : any) => {

    return(
        <UserInfoWrapper>
            {user.DisplayName}
        </UserInfoWrapper>
    )
}

export default UserInfo;