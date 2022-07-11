import IUser from "../../../interfaces/user";
import { UserBarContainer, UserImgContainer, UserImg } from './styles'
import FriendLogic from '../friend-logic/friend-logic';

type UserBarProps = {
    user: IUser
}

const UserBar = ({user} : UserBarProps) => {

    return(
        <UserBarContainer>
            {user.ProfileImg && <UserImgContainer><UserImg src={user.ProfileImg}/></UserImgContainer>}
            {!user.ProfileImg && <UserImgContainer><UserImg src="https://i.stack.imgur.com/l60Hf.png"/></UserImgContainer>}
            {user.DisplayName}
            <FriendLogic user={user}/>
        </UserBarContainer>
    )
}

export default UserBar;