import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext"
import { ResultsContainer, SearchBarContainer, SearchResult } from "./styles"

const SearchBar = ({toggle} : any) => {
    const { user } = useContext<any>(UserContext);

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

        const result = results.filter((user:any) => user.DisplayName.toUpperCase().includes(search.toUpperCase()))

        if(result.length === 0) return "Nothing Found";

        return result.map((result: any) => 
            <SearchResult key={result.Id}>
                <Link to={`/user/${result.Id}`}>
                    {result.DisplayName}
                    {result.DisplayName === user.DisplayName && " (Me)"}
                </Link>
            </SearchResult>
        )
    };

    return(
        <SearchBarContainer>
            Search Here
            <Link to="/search">More...</Link>
            <input type="text" placeholder="Search..." value={search} onChange={handleChange} />
            <ResultsContainer>
                {handleResults()}
            </ResultsContainer>
            <button onClick={toggle}>X</button>
        </SearchBarContainer>
    )
}

export default SearchBar