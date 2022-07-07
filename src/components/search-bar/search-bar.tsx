import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/userContext"
import { SearchBarContainer } from "./styles"

const SearchBar = ({toggle} : any) => {
    //What kinds of things can i search?
    //users
    const user = useContext<any>(UserContext);

    const [results, setResults] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const handleChange = (e: any) => {
        setSearch(search => e.target.value)
    };

    const fetchData = async () => {
        const res = await fetch('/users/all');

        if(!res.ok) return

        const resJSON = await res.json();

        setResults(resJSON.users)
    };

    const handleResults = () => {
        if(search === "") return

        const result = results.filter((user:any) => user.DisplayName.includes(search));

        if(result.length === 0) return "Nothing Found";

        return result.map((result: any) => 
            <div key={result.Id}>
                {result.DisplayName}
                {result.DisplayName === user.DisplayName && " (Me)"}
            </div>
        )
    }

    return(
        <SearchBarContainer>
            Search Here
            <input type="text" placeholder="Search..." value={search} onChange={handleChange} />
            <button onClick={toggle}>X</button>
            <div>
                {handleResults()}
            </div>
        </SearchBarContainer>
    )
}

export default SearchBar