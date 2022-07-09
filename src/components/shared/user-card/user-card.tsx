import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { UserCardContainer, UserImg, UserImgContainer, UserNameContainer } from "./styles"

const UserCard = ({user} : any) => {
    const { user: currentUser}  = useContext<any>(UserContext)

    return(
        <UserCardContainer>
            <UserImgContainer>
                {user.ProfileImg ? <UserImg src={user.ProfileImg} /> : <UserImg src="https://i.stack.imgur.com/l60Hf.png" />}
            </UserImgContainer>
            <UserNameContainer>
                {user.Id === currentUser.Id ? `${user.DisplayName} (Me)` : `${user.DisplayName}`}
            </UserNameContainer>
        </UserCardContainer>
    )
}

export default UserCard