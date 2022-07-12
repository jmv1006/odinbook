import { useContext } from "react"
import { UserPageContext } from "../../../context/userPageContext"
import { CardsContainer, UserFriendsContainer } from "./styles"
import UserCard from "../../shared/user-card/user-card"

const UserFriends = () => {
    const {friends, isCurrentUser} = useContext<any>(UserPageContext);

    const mappedFriends = friends.map((friend: any) => 
        <UserCard key={friend.Id} user={friend} isCurrentUser={isCurrentUser}/>
    );

    return(
        <UserFriendsContainer>
            Friends:
            <CardsContainer>
                {mappedFriends}
            </CardsContainer>
        </UserFriendsContainer>
    )
}

export default UserFriends