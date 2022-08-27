import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context/userContext";
import useFetch from "../../../../hooks/useFetch";
import IUser from "../../../../interfaces/user";
import UserCard from "../../../shared/user-card/user-card";
import SentRequests from "./sent/sent-requests";
import { RequestsContainer } from "./styles"

interface Request {
    Id: string,
    From_uuid: string,
    Is_Accepted: boolean,
    To_uuid: string,
    Users_UsersTofriend_requests_From_uuid: IUser
};

const FriendRequests = () => {

    const {user} = useContext<any>(UserContext);

    const {response} = useFetch(`/friend-requests/recieved/${user.Id}`)

    const [recievedRequests, setRecievedRequests] = useState<Array<Request>>([]);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(response) setRecievedRequests(recievedRequests => response.requests)
    }, [response])

    const mappedRequests = recievedRequests.map((request: Request) => 
        <UserCard user={request.Users_UsersTofriend_requests_From_uuid} isCurrentUser={false} />
    );

    const toggleSentRequestsModal = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    }

    return(
        <RequestsContainer>
            <div>
                {mappedRequests.length === 0 && "No Requests!"}
                {mappedRequests}
            </div>
            {isOpen && <SentRequests toggle={toggleSentRequestsModal} />}
            <button onClick={toggleSentRequestsModal}>Sent Requests</button>
        </RequestsContainer>
    )
}

export default FriendRequests