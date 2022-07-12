import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../context/userContext"
import { UserCardContainer, UserImg, UserImgContainer, UserNameContainer } from "./styles"
import IUser from "../../../interfaces/user"
import DeleteFriendModal from './delete-modal/delete-friend-modal';

type UserCardPropTypes = {
    user: IUser,
    isCurrentUser: boolean
}

const UserCard = ({user, isCurrentUser} : UserCardPropTypes) => {
    const { user: currentUser}  = useContext<any>(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDeleteModal = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    };

    return(
        <UserCardContainer>
                {isCurrentUser && <button onClick={toggleDeleteModal}>X</button>}
                {isOpen && <DeleteFriendModal toggle={toggleDeleteModal} user={user} currentUser={currentUser}/>}
            <Link to={`/user/${user.Id}`}>
                <UserImgContainer>
                    {user.ProfileImg ? <UserImg src={user.ProfileImg} /> : <UserImg src="https://i.stack.imgur.com/l60Hf.png" />}
                </UserImgContainer>
                <UserNameContainer>
                    {user.Id === currentUser.Id ? `${user.DisplayName} (Me)` : `${user.DisplayName}`}
                </UserNameContainer>
            </Link>
        </UserCardContainer>
    )
}

export default UserCard