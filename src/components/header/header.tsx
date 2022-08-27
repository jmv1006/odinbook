import { useState } from "react";
import { Link } from "react-router-dom";
import { useNotifications } from "../../context/notificationsContext";
import SearchBar from "../search-bar/search-bar";
import HeaderDropDown from "./header-dropdown/header-dropdown";
import NotificationsDropDown from "./notifications-dropdown/notifications-dropdown";
import notificationBellUrl from '../../assets/notification.png';
import searchImgUrl from '../../assets/search-interface-symbol.png';
import { DropdownButton, HeaderContainer, HeaderLeftSide, HeaderRightSide, HeaderTitle, NotificationBell, NotificationBellContainer, NotificationsBtn, SearchButton, SearchImg, SearchImgContainer } from "./styles";

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
                {!searchIsToggled && 
                    <SearchButton onClick={toggleSearchBar}>
                        <SearchImgContainer>
                            <SearchImg src={searchImgUrl} alt="Search"/>
                        </SearchImgContainer>
                    </SearchButton>
                }
                {searchIsToggled && <SearchBar toggle={toggleSearchBar}/>}
            </HeaderLeftSide>
            <HeaderRightSide>
                <NotificationsBtn onClick={toggleNotifications}>
                    <NotificationBellContainer>
                        <NotificationBell src={notificationBellUrl} alt="Notifications"/>
                    </NotificationBellContainer>
                    {notifications.length > 0 ? `(${notifications.length})` : null}
                </NotificationsBtn>
                {notificationsOpen && <NotificationsDropDown toggle={toggleNotifications} />}
                <DropdownButton onClick={toggleIsOpen}>...</DropdownButton>
                {isOpen && <HeaderDropDown toggle={toggleIsOpen}/>}
            </HeaderRightSide>
        </HeaderContainer>
    )
}

export default Header;