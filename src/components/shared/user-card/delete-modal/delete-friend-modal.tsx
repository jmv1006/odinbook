import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useFriends } from "../../../../context/userFriendsContext ";
import { UserPageContext } from "../../../../context/userPageContext";
import { DeleteFriendModalContainer } from "./styles"

const DeleteFriendModal = ({toggle, user, currentUser} : any) => {
    const naigate = useNavigate();

    const {reFetchFriends} = useFriends();
    const {userPageFriendsReload} = useContext<any>(UserPageContext);

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
        
        userPageFriendsReload();
        reFetchFriends();
        naigate(`/user/${currentUser.Id}`)
    };

    return(
        <DeleteFriendModalContainer>
            {isLoading ? "Loading...":
                <>
                    <div>Are you sure you want to remove x as a friend?</div>
                    <button onClick={deleteFriendship}>Yes</button>
                    <button onClick={toggle}>No</button>
                </>
            }
        </DeleteFriendModalContainer>
    )
}

export default DeleteFriendModal