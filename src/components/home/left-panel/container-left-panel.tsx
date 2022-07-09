import { LeftPanelContainerStyles } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const LeftPanelContainer = () => {
    const { user } = useContext<any>(UserContext);

    return(
        <LeftPanelContainerStyles>
            <h3>Hello, {user.DisplayName}</h3>
        </LeftPanelContainerStyles>
    )
}

export default LeftPanelContainer;