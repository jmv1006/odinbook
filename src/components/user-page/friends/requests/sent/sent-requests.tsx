import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../../../context/userContext"
import useFetch from "../../../../../hooks/useFetch"
import IUser from "../../../../../interfaces/user"
import UserBar from "../../../../shared/user-bar/user-bar"
import { CloseBtn, RequestsContainer, SentRequestsModal, SentRequestsTitle, SentRequestsTopContainer } from "./styles"

interface SentRequest {
    Id: string,
    From_uuid: string,
    Is_Accepted: boolean,
    To_uuid: string,
    Users_UsersTofriend_requests_To_uuid: IUser
};

const SentRequests = ({toggle} : any) => {

    const {user} = useContext<any>(UserContext);

    const {response} = useFetch(`/friend-requests/sent/${user.Id}`)
    
    const [sentRequests, setSentRequests] = useState<Array<SentRequest>>([]);


    useEffect(() => {
        if(response) setSentRequests(sentRequests => response.requests)
    }, [response])

    const mappedRequests = sentRequests.map((request: SentRequest) =>
        <UserBar user={request.Users_UsersTofriend_requests_To_uuid} key={request.Id} />
    );

    return(
        <SentRequestsModal>
            <SentRequestsTopContainer>
                <SentRequestsTitle>Sent Requests:</SentRequestsTitle>
                <CloseBtn onClick={() => toggle()}>X</CloseBtn>
            </SentRequestsTopContainer>
            <RequestsContainer>
                {mappedRequests.length === 0 && "No Sent Requests!"}
                {mappedRequests}
            </RequestsContainer>
        </SentRequestsModal>
    )
}

export default SentRequests