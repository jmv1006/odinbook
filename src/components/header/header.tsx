import { HeaderContainer } from "./styles";
import SearchBar from "../search-bar/search-bar";
import { useState } from "react";

const Header = () => {
    const [searchIsToggled, setSearchIsToggled] = useState(false);

    const toggleSearchBar = () => {
        if(searchIsToggled) return setSearchIsToggled(searchIsToggled => false)
        setSearchIsToggled(searchIsToggled => true)
    };

    return(
        <HeaderContainer>
            Header
            {!searchIsToggled && <button onClick={toggleSearchBar}>Search</button>}
            {searchIsToggled && <SearchBar toggle={toggleSearchBar}/>}
        </HeaderContainer>
    )
}

export default Header;