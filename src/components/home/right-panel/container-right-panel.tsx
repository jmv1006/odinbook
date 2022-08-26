import { useState } from "react";
import { RightPanelContainerStyles } from "./styles";
import UserBar from "../../shared/user-bar/user-bar";
import IUser from "../../../interfaces/user";

type RightPanelContainerProps = {
    friends: Array<IUser>
};

const RightPanelContainer= ({friends}: RightPanelContainerProps) => {
    const [search, setSearch] = useState("");

    const handleChange = (e: any) => {
        setSearch(search => e.target.value);
    };

    const handleSearch = () => {
        const result = friends.filter((friend:any) => friend.DisplayName.toUpperCase().includes(search.toUpperCase()));

        if(result.length === 0) return "No Friends Found";

        return result.map((result: any) => 
            <UserBar key={result.Id} user={result} includeFriendLogic={false}/>
        )
    };

    return(
        <RightPanelContainerStyles>
            <h3>Your Friends</h3>
            <input type="text" placeholder="Search" value={search} onChange={handleChange}/>
            {handleSearch()}
        </RightPanelContainerStyles>
    )
}

export default RightPanelContainer;