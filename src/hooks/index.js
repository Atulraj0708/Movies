import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

const useFetch = (url) => {
    // State variables to hold the fetched data, loading state, and any errors
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Initialize the loading state and reset data and error states
        setLoading("loading...");
        setData(null);
        setError(null);

        // Fetch data from the provided URL
        fetchData(url)
            .then((res) => {
                setLoading(false); // Set loading to false when data is received
                setData(res); // Set the received data
            })
            .catch((err) => {
                console.log(err);
                setLoading(false); // Set loading to false in case of an error
                setError("Something went wrong!"); // Set an error message
            });
    }, [url]); // Dependency array to refetch data when the URL changes

    return { data, loading, error }; // Return the state variables
};

export default useFetch;
