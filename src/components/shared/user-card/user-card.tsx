import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../context/userContext"
import { UserCardContainer, UserImg, UserImgContainer, UserNameContainer } from "./styles"
import IUser from "../../../interfaces/user"
import DeleteFriendModal from '../friend-logic/delete-modal/delete-friend-modal';
import FriendLogic from '../friend-logic/friend-logic';

type UserCardPropTypes = {
    user: IUser,
    isCurrentUser: boolean
}

const UserCard = ({ user } : UserCardPropTypes) => {
    const [isOpen, setIsOpen] = useState(false);

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