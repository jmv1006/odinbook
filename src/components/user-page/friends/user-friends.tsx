import { Link, useParams } from "react-router-dom";
import UserCard from "../../shared/user-card/user-card"
import { useUserPageContext } from "../../../context/userPageContext"
import { CardsContainer, UserFriendsContainer } from "./styles"

const UserFriends = () => {
    const params = useParams();

    const { friends, isCurrentUser } = useUserPageContext();

    const mappedFriends = friends.map((friend: any) =>
        <UserCard key={friend.Id} user={friend} isCurrentUser={isCurrentUser} />
    );


    return (
        <UserFriendsContainer>
            <CardsContainer>
                {mappedFriends}
                {friends.length === 0 && "User Has No Friends!"}
            </CardsContainer>
            {isCurrentUser && <Link to={`/user/${params.UserId}/friends/requests`}>Requests</Link>}
        </UserFriendsContainer>
    )
}

export default UserFriends