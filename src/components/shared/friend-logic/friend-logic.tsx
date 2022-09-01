import { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { useFriends } from "../../../context/userFriendsContext ";
import IUser from "../../../interfaces/user";
import AddFriend from "./add-friend/add-friend";
import DeleteFriendModal from "./delete-modal/delete-friend-modal";
import { DeleteFriendBtn } from "./delete-modal/styles";

type FriendLogicProps = {
    user: IUser
}

const FriendLogic = ({ user }: FriendLogicProps) => {

    const { user: currentUser } = useContext<any>(UserContext);

    const { friends } = useFriends();

    const [isOpen, setIsOpen] = useState(false);

    const isUserFriend = () => {
        const isFriend = friends.some((friend: any) => friend.Id === user.Id);
        if (isFriend) return true
        return false
    };

    const isCurrentUser = () => {
        if (user.Id === currentUser.Id) return true
        return false
    }

    const toggleDeleteFriendModal = () => {
        if (isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    }


    return (
        <>
            {isUserFriend() && <strong>Friend</strong>}
            {isUserFriend() && <DeleteFriendBtn onClick={toggleDeleteFriendModal}>Remove Friend</DeleteFriendBtn>}
            {isOpen && <DeleteFriendModal toggle={toggleDeleteFriendModal} user={user} currentUser={currentUser} />}
            {isCurrentUser() && <strong>(Me)</strong>}
            {!isCurrentUser() && !isUserFriend() ? <AddFriend user={user} /> : null}
        </>
    )
}

export default FriendLogic