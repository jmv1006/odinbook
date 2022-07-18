import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../context/userContext"
import { FriendRequestsContainer } from "./styles"
import useFetch from "../../../../hooks/useFetch"
import { useUserPageContext } from "../../../../context/userPageContextRewrite"
import { useNavigate, useParams } from "react-router-dom"

const FriendRequests = () => {
    const navigate = useNavigate();
    const params = useParams();

    const {user} = useContext<any>(UserContext);

    const {isCurrentUser} = useUserPageContext();

    const {response: recievedRequestsResponse} = useFetch(`/friend-requests/recieved/${user.Id}`)

    const {response: sentRequestsResponse} = useFetch(`/friend-requests/sent/${user.Id}`)

    const [recievedRequests, setRecievedRequests] = useState([]);
    const [sentRequests, setSentRequests] = useState([]);

    useEffect(() => {
        if(!isCurrentUser) navigate(`/user/${params.UserId}`)
    }, [isCurrentUser])

    useEffect(() => {
        if(recievedRequestsResponse) setRecievedRequests(recievedRequestsResponse.requests)
    }, [recievedRequestsResponse])

    useEffect(() => {
        if(sentRequestsResponse) setSentRequests(sentRequestsResponse.requests)
    }, [sentRequestsResponse]);

    const mappedSentRequests = sentRequests.map((request: any) => 
        <div key={request.Id}>Request</div>
    )

    return(
        <FriendRequestsContainer>
            <div>Recieved Requests: {recievedRequests.length}</div>
            <div>Sent Requests: {mappedSentRequests}</div>
        </FriendRequestsContainer>
    )
}

export default FriendRequests