import { useState } from "react";
import { RightPanelContainerStyles } from "./styles";

const RightPanelContainer= ({friends}: any) => {


    const [search, setSearch] = useState("");

    const handleChange = (e: any) => {
        setSearch(search => e.target.value);
    };

    const handleSearch = () => {
        const result = friends.filter((friend:any) => friend.DisplayName.includes(search));

        if(result.length === 0) return "No Friends Found";

        return result.map((result: any) => 
            <div key={result.Id}>{result.DisplayName}</div>
        )
    };

    return(
        <RightPanelContainerStyles>
            <h3>Your Friends</h3>
            <input type="text" placeholder="Search" value={search} onChange={handleChange}/>
            <div>{handleSearch()}</div>
        </RightPanelContainerStyles>
    )
}

export default RightPanelContainer;