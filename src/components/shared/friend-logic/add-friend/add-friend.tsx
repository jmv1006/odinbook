import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../../../../context/SocketContext";
import { UserContext } from "../../../../context/userContext";
import { useFriends } from "../../../../context/userFriendsContext ";
import useFetch from "../../../../hooks/useFetch";
import IUser from "../../../../interfaces/user";
import { AddFriendBtn } from "./style";

type AddFriendProps = {
    user: IUser
}
interface IFriendRequest {
    Id: string,
    From_uuid: string,
    To_uuid: string,
    Is_Accepted: boolean
}

const AddFriend = ({ user }: AddFriendProps) => {
    const { user: currentUser } = useContext<any>(UserContext);
    const { reFetchFriends } = useFriends();

    const socket = useContext(SocketContext);

    const [btnText, setBtnText] = useState('Add Friend');

    const [requestExists, setRequestExists] = useState(false);
    const [request, setRequest] = useState<null | IFriendRequest>(null);

    const { response, reFetch } = useFetch(`/friend-requests/${currentUser.Id}/${user.Id}`)

    useEffect(() => {
        if (response) {
            if (response.exists) {
                setRequest(response.request)
                setRequestExists(true)
                return
            }
            setRequestExists(false)
        }
    }, [response])

    const handleExistingRequest = () => {
        if (request) {
            if (request.From_uuid === currentUser.Id) {
                return (
                    <>
                        <>Friend Request Sent</>
                        <button onClick={declineRequest}>Cancel</button>
                    </>
                )
            }
            return (
                <>
                    <button onClick={acceptRequest}>Accept</button>
                    <button onClick={declineRequest}>Decline</button>
                </>
            )
        }
    }

    const sendFriendRequest = async () => {
        setBtnText(btnText => "Sending Request...")
        const response = await fetch(`/friend-requests/${currentUser.Id}/${user.Id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return
        }

        const resJSON = await response.json()
        setRequestExists(requestExists => true)
        setRequest(request => resJSON.request)
    };

    const acceptRequest = async () => {
        const response = await fetch(`/friendships/${currentUser.Id}/${user.Id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return
        }
        reFetchFriends();
    }

    const declineRequest = async () => {
        const response = await fetch(`/friend-requests/${request?.Id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return
        }
        reFetch();
    }


    return (
        <>
            {request && requestExists ? handleExistingRequest() : null}
            {!requestExists && <AddFriendBtn onClick={sendFriendRequest}>{btnText}</AddFriendBtn>}
        </>
    )
}

export default AddFriend