import { RightPanelContainerStyles } from "./styles";

const RightPanelContainer= ({friends}: any) => {

    const mappedFriends = friends.map((friend: any) => 
        <li key={friend.Id}>{friend.DisplayName}</li>
    );

    return(
        <RightPanelContainerStyles>
            Your Friends:
            <ul>
                {mappedFriends}
            </ul>
        </RightPanelContainerStyles>
    )
}

export default RightPanelContainer;