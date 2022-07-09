import IUser from "../../../interfaces/user";
import { UserBarContainer, UserImgContainer, UserImg } from './styles'

type UserBarProps = {
    user: IUser
}

const UserBar = ({user} : UserBarProps) => {
    return(
        <UserBarContainer>
            {user.ProfileImg ? <UserImgContainer><UserImg src={user.ProfileImg}/></UserImgContainer> : <UserImgContainer><UserImg src="https://i.stack.imgur.com/l60Hf.png"/></UserImgContainer>}
            {user.DisplayName}
        </UserBarContainer>
    )
}

export default UserBar;