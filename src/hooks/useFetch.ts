import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const useFetch = (url: string | null) => {
    const navigate = useNavigate();
    const {user} = useContext<any>(UserContext);

    const [response, setResponse] = useState<any>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    useEffect(() => {
        if(!url) return
        fetchData(url)
    }, [url])

    const fetchData = async (url: string) => {
        setIsLoading(true)
        const res = await fetch(url);

        if(!res.ok) {
            setIsLoading(false)
            if(user && res.status === 401) {
                //session expired
                window.location.reload()
                return
            }
            navigate('/error')
        }


        const resJSON = await res.json();
        setResponse(resJSON);
        setIsLoading(false);
    }

    const reFetch = () => {
        if(url) fetchData(url)
    }


    return {response, isLoading, reFetch}

}

export default useFetch;