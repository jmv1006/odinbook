import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Notifications from "../../shared/notifications/notifications";
import { LeftPanelContainerStyles, LeftPanelNotificationsContainer } from "./styles";

const LeftPanelContainer = () => {
    const { user } = useContext<any>(UserContext);

    return (
        <LeftPanelContainerStyles>
            <h3>Hello, {user.DisplayName}</h3>
            <h4>Here's Whats Happening: </h4>
            <LeftPanelNotificationsContainer>
                <Notifications />
            </LeftPanelNotificationsContainer>
        </LeftPanelContainerStyles>
    )
}

export default LeftPanelContainer;