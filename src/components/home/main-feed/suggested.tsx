import { SuggestedExitBtn, SuggestedUsersBar, SuggestedUsersContainer, SuggestedUsersTop } from "./styles";
import { useContext } from "react";
import UserCard from "../../shared/user-card/user-card";
import { HomePageContext } from "../../../context/homePageContext";

const SuggestedForYou = ({ toggle }: any) => {
    const { suggested } = useContext(HomePageContext);


    const mappedSuggested = suggested.map((user: any) =>
        <UserCard key={user.Id} user={user} isCurrentUser={false} />
    );

    return (
        <SuggestedUsersContainer>
            <SuggestedUsersTop>
                <div>Suggested For You:</div>
                <SuggestedExitBtn onClick={toggle}>X</SuggestedExitBtn>
            </SuggestedUsersTop>
            <SuggestedUsersBar>{mappedSuggested}</SuggestedUsersBar>
        </SuggestedUsersContainer>
    )
}

export default SuggestedForYou;