import { LeftPanelContainerStyles } from "./styles";

const LeftPanelContainer = ({user}: any) => {
    return(
        <LeftPanelContainerStyles>
            <h3>Hello, {user.DisplayName}</h3>
        </LeftPanelContainerStyles>
    )
}

export default LeftPanelContainer;