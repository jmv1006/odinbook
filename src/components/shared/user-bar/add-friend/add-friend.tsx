import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../context/userContext";
import useFetch from "../../../../hooks/useFetch";
import IUser from "../../../../interfaces/user";

type AddFriendProps = {
    user: IUser
}

const AddFriend = ({user}: AddFriendProps) => {

    const {user: currentUser} = useContext<any>(UserContext);

    const [btnText, setBtnText] = useState('Add Friend');

    const [requestExists, setRequestExists] = useState(false);

    const {response} = useFetch(`/friend-requests/${user.Id}/${currentUser.Id}`)

    useEffect(() => {
        if(response){
            //If request exists, who sent it?
            //If current user sent it, request sent
            //if current user did not send it, accept or decline
            if(response.exists) return setRequestExists(true)
            setRequestExists(false)
        }
    }, [response])

    const sendFriendRequest = async () => {
        setBtnText(btnText => "Sending Request...")
        const response = await fetch(`/friend-requests/${currentUser.Id}/${user.Id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) {
            console.log(response.json())
            return
        }

        //Request successful
        setRequestExists(requestExists => true)
    };


    return(
        <>
            {requestExists && <h4>Request Sent</h4>}
            {!requestExists && <button onClick={sendFriendRequest}>{btnText}</button>}
        </>
    )
}

export default AddFriend