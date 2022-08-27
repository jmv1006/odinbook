import Notifications from "../../shared/notifications/notifications"
import { NotificationsDropDownContainer } from "./styles"

type NotificationsDropDownProps = {
    toggle: () => void
}

const NotificationsDropDown = ({toggle} : NotificationsDropDownProps) => {
    return(
        <NotificationsDropDownContainer>
            <h3>Notifications</h3>
            <Notifications />
        </NotificationsDropDownContainer>
    )
};

export default NotificationsDropDown