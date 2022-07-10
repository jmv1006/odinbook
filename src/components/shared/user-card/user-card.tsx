import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../context/userContext"
import { UserCardContainer, UserImg, UserImgContainer, UserNameContainer } from "./styles"
import IUser from "../../../interfaces/user"

type UserCardPropTypes = {
    user: IUser
}

const UserCard = ({user} : UserCardPropTypes) => {
    const { user: currentUser}  = useContext<any>(UserContext);

    return(
        <UserCardContainer>
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