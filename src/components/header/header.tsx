import { HeaderContainer, HeaderLeftSide, HeaderRightSide, HeaderTitle } from "./styles";
import SearchBar from "../search-bar/search-bar";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderDropDown from "../header-dropdown/header-dropdown";

const Header = () => {
    const [searchIsToggled, setSearchIsToggled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);



    const toggleSearchBar = () => {
        if(searchIsToggled) return setSearchIsToggled(searchIsToggled => false)
        setSearchIsToggled(searchIsToggled => true)
    };

    const toggleIsOpen = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    };

    return(
        <HeaderContainer>
            <HeaderLeftSide>
                <Link to="/"><HeaderTitle>Odinbook</HeaderTitle></Link>
                {!searchIsToggled && <button onClick={toggleSearchBar}>Q</button>}
                {searchIsToggled && <SearchBar toggle={toggleSearchBar}/>}
            </HeaderLeftSide>
            <HeaderRightSide>
                <button onClick={toggleIsOpen}>...</button>
                {isOpen && <HeaderDropDown toggle={toggleIsOpen}/>}
            </HeaderRightSide>
        </HeaderContainer>
    )
}

export default Header;