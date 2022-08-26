import { NotificationsDropDownContainer } from "./styles"
import Notifications from "../../shared/notifications/notifications"

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