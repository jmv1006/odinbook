import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ResultsContainer, SearchBarContainer } from "./styles"
import UserBar from "../shared/user-bar/user-bar";

const SearchBar = ({toggle} : any) => {

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

        setResults(results => resJSON.users)
    };

    const handleResults = () => {
        if(search === "") return

        const result = results.filter((user:any) => user.DisplayName.toUpperCase().includes(search.toUpperCase()))

        return result.map((result: any) => 
            <UserBar user={result} key={result.Id} />
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