import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useFriends } from "../../../../context/userFriendsContext ";
import IUser from "../../../../interfaces/user";
import { DeleteFriendModalContainer, DeleteFriendModalContentContainer } from "./styles"

type DeleteFriendModalProps = {
    toggle: () => void,
    user: IUser,
    currentUser: IUser
}

const DeleteFriendModal = ({toggle, user, currentUser} : DeleteFriendModalProps) => {
    const naigate = useNavigate();

    const {reFetchFriends} = useFriends();

    const [isLoading, setIsLoading] = useState(false);

    const deleteFriendship = async () => {
        setIsLoading(true)

        const response = await fetch(`/friendships/${user.Id}/${currentUser.Id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(!response.ok) {
            return
        }
        
        await reFetchFriends()
        naigate(`/user/${currentUser.Id}`)
    };

    return(
        <DeleteFriendModalContainer>
            <DeleteFriendModalContentContainer>
                {isLoading ? "Loading...":
                    <>
                        <div>Are you sure you want to remove <strong>{user.DisplayName}</strong> as a friend?</div>
                        <button onClick={deleteFriendship}>Yes</button>
                        <button onClick={toggle}>No</button>
                    </>
                }
            </DeleteFriendModalContentContainer>
        </DeleteFriendModalContainer>
    )
}

export default DeleteFriendModal