import { useNavigate } from "react-router-dom";
import IUser from "../../../interfaces/user";
import FriendLogic from '../friend-logic/friend-logic';
import { UserBarContainer, UserImgContainer, UserImg, UserBarFriendLogic } from './styles'

type UserBarProps = {
    user: IUser,
    includeFriendLogic: boolean
}

const UserBar = ({user, includeFriendLogic} : UserBarProps) => {
    const navigate = useNavigate()

    const navigateToUserPage = () => {
        navigate(`/user/${user.Id}`)
    };

    return(
        <UserBarContainer onClick={navigateToUserPage}>
            {user.ProfileImg && <UserImgContainer><UserImg src={user.ProfileImg}/></UserImgContainer>}
            {user.DisplayName}
            {includeFriendLogic && <UserBarFriendLogic><FriendLogic user={user}/></UserBarFriendLogic>}
        </UserBarContainer>
    )
}

export default UserBar;