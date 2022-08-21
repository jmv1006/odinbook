import { NotificationsDropDownContainer } from "./styles"
import Notifications from "../../shared/notifications/notifications"


const NotificationsDropDown = ({toggle} : any) => {
    return(
        <NotificationsDropDownContainer>
            <h3>Notifications</h3>
            <Notifications />
        </NotificationsDropDownContainer>
    )
}

export default NotificationsDropDown