import { useEffect, useState } from "react";

const useFetch = (url: string | null) => {
    
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
        }

        const resJSON = await res.json();
        setResponse(resJSON);
    }

    const reFetch = () => {
        if(url) fetchData(url)
    }


    return {response, isLoading, reFetch}

}

export default useFetch;