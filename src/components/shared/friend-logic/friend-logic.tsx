import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { useFriends } from "../../../context/userFriendsContext ";
import AddFriend from "./add-friend/add-friend";

const FriendLogic = ({user} : any) => {

    const { user: currentUser } = useContext<any>(UserContext);

    const { friends } = useFriends();

    const isUserFriend = () => {
        const isFriend = friends.some((friend : any) => friend.Id === user.Id)
        if(isFriend) return true
        return false
    };

    const isCurrentUser = () => {
        if(user.Id === currentUser.Id) return true
        return false
    }


    return (
        <>
            {isUserFriend() &&  <div>Friend</div>}
            {isCurrentUser() && <div>(Me)</div>}
            {!isCurrentUser() && !isUserFriend() ? <AddFriend user={user}/> : null}
        </>
    )
}

export default FriendLogic