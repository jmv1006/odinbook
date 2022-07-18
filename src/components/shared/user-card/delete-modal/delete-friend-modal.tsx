import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../../../context/SocketContext";
import { DeleteFriendModalContainer } from "./styles"

const DeleteFriendModal = ({toggle, user, currentUser } : any) => {
    const naigate = useNavigate();

    const socket = useContext(SocketContext);

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
        
        await socket.emit('notification', user.Id, 'friend-update', null)
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