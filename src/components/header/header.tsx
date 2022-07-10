import { HeaderContainer } from "./styles";
import SearchBar from "../search-bar/search-bar";
import { useState } from "react";
import Notifications from "../notifications/notifications";
import { Link } from "react-router-dom";

const Header = () => {
    const [searchIsToggled, setSearchIsToggled] = useState(false);
    const [notificationsToggled, setNotificationsToggled] = useState(false);

    const toggleSearchBar = () => {
        if(searchIsToggled) return setSearchIsToggled(searchIsToggled => false)
        setSearchIsToggled(searchIsToggled => true)
    };

    const toggleNotifications = () => {
        if(notificationsToggled) return setNotificationsToggled(notificationsToggled => false)
        setNotificationsToggled(notificationsToggled => true)
    }

    return(
        <HeaderContainer>
            <Link to="/">Header</Link>
            {!searchIsToggled && <button onClick={toggleSearchBar}>Search</button>}
            {searchIsToggled && <SearchBar toggle={toggleSearchBar}/>}
            {notificationsToggled && <Notifications toggle={toggleNotifications}/>}
            {!notificationsToggled && <button onClick={toggleNotifications}>Bell</button>}
        </HeaderContainer>
    )
}

export default Header;