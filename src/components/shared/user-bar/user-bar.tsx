import IUser from "../../../interfaces/user";
import { UserBarContainer, UserImgContainer, UserImg } from './styles'
import FriendLogic from '../friend-logic/friend-logic';
import { useNavigate } from "react-router-dom";

type UserBarProps = {
    user: IUser
}

const UserBar = ({user} : UserBarProps) => {
    const navigate = useNavigate()

    const navigateToUserPage = () => {
        navigate(`/user/${user.Id}`)
    };

    return(
        <UserBarContainer>
            {user.ProfileImg && <UserImgContainer onClick={navigateToUserPage}><UserImg src={user.ProfileImg}/></UserImgContainer>}
            {!user.ProfileImg && <UserImgContainer onClick={navigateToUserPage}><UserImg src="https://i.stack.imgur.com/l60Hf.png"/></UserImgContainer>}
            {user.DisplayName}
            <FriendLogic user={user}/>
        </UserBarContainer>
    )
}

export default UserBar;