import { LeftPanelContainerStyles } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Notifications from "../../shared/notifications/notifications";

const LeftPanelContainer = () => {
    const { user } = useContext<any>(UserContext);

    return(
        <LeftPanelContainerStyles>
            <h3>Hello, {user.DisplayName}</h3>
            <h4>Here's Whats Happening: </h4>
            <Notifications />
        </LeftPanelContainerStyles>
    )
}

export default LeftPanelContainer;