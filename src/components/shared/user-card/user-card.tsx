import { Link } from "react-router-dom"
import IUser from "../../../interfaces/user"
import FriendLogic from '../friend-logic/friend-logic';
import { UserCardContainer, UserImg, UserImgContainer, UserNameContainer } from "./styles"

type UserCardPropTypes = {
    user: IUser,
    isCurrentUser: boolean
}

const UserCard = ({ user } : UserCardPropTypes) => {
    return(
        <UserCardContainer>
            <Link to={`/user/${user.Id}`} style={{ textDecoration: 'none', color: "black" }}>
                <UserImgContainer>
                    {user.ProfileImg ? <UserImg src={user.ProfileImg} /> : <UserImg src="https://i.stack.imgur.com/l60Hf.png" />}
                </UserImgContainer>
                <UserNameContainer>
                    {user.DisplayName}
                </UserNameContainer>
            </Link>
            <FriendLogic user={user} />
        </UserCardContainer>
    )
}

export default UserCard