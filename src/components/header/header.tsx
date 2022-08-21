import { DropdownButton, HeaderContainer, HeaderLeftSide, HeaderRightSide, HeaderTitle } from "./styles";
import SearchBar from "../search-bar/search-bar";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderDropDown from "./header-dropdown/header-dropdown";
import NotificationsDropDown from "./notifications-dropdown/notifications-dropdown";
import { useNotifications } from "../../context/notificationsContext";

const Header = () => {
    const {notifications} = useNotifications();
    const [searchIsToggled, setSearchIsToggled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    const toggleSearchBar = () => {
        if(searchIsToggled) return setSearchIsToggled(searchIsToggled => false)
        setSearchIsToggled(searchIsToggled => true)
    };

    const toggleIsOpen = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    };

    const toggleNotifications = () => {
        if(notificationsOpen) return setNotificationsOpen(notificationsOpen => false)
        setNotificationsOpen(notificationsOpen => true)
    }

    return(
        <HeaderContainer>
            <HeaderLeftSide>
                <Link to="/" style={{ textDecoration: 'none', color: "black" }}><HeaderTitle>Odinbook</HeaderTitle></Link>
                {!searchIsToggled && <button onClick={toggleSearchBar}>Search</button>}
                {searchIsToggled && <SearchBar toggle={toggleSearchBar}/>}
            </HeaderLeftSide>
            <HeaderRightSide>
                <button onClick={toggleNotifications}>{notifications.length === 0 ? "N" : `N (${notifications.length})`}</button>
                {notificationsOpen && <NotificationsDropDown toggle={toggleNotifications} />}
                <DropdownButton onClick={toggleIsOpen}>...</DropdownButton>
                {isOpen && <HeaderDropDown toggle={toggleIsOpen}/>}
            </HeaderRightSide>
        </HeaderContainer>
    )
}

export default Header;