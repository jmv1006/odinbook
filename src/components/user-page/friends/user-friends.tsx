import { CardsContainer, UserFriendsContainer } from "./styles"
import UserCard from "../../shared/user-card/user-card"
import { useUserPageContext } from "../../../context/userPageContextRewrite"
import { Link, useNavigate, useParams } from "react-router-dom";

const UserFriends = () => {
    const params = useParams();

    const {friends, isCurrentUser} = useUserPageContext();


    const mappedFriends = friends.map((friend: any) => 
        <UserCard key={friend.Id} user={friend} isCurrentUser={isCurrentUser} />
    );


    return(
        <UserFriendsContainer>
            Friends:
            {isCurrentUser && <Link to={`/user/${params.UserId}/friends/requests`}>Requests</Link>}
            <CardsContainer>
                {mappedFriends}
            </CardsContainer>
        </UserFriendsContainer>
    )
}

export default UserFriends