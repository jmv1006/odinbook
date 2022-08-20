import { useEffect } from "react"
import { useNotifications } from "../../../context/notificationsContext"

const Notifications = () => {
    const {notifications} = useNotifications();

    useEffect(() => {
        console.log(notifications)
    }, [notifications])

    return(
        <div>Notifications</div>
    )
}

export default Notifications