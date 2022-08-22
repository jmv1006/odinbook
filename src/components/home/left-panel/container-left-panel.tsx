import { LeftPanelContainerStyles } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Notifications from "../../shared/notifications/notifications";

const LeftPanelContainer = () => {
    const { user } = useContext<any>(UserContext);

    return(
        <LeftPanelContainerStyles>
            <h3>Hello, {user.DisplayName}</h3>
            Here's Whats Happening:
            <div>Notifications:</div>
            <Notifications />
        </LeftPanelContainerStyles>
    )
}

export default LeftPanelContainer;