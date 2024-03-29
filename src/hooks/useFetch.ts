import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

const useFetch = (url: string | null) => {
    const {user} = useContext<any>(UserContext);

    const [response, setResponse] = useState<any>(null);
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