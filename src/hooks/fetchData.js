import axios from "axios";

// Base URL for the API requests
const BASE_URL = "https://api.themoviedb.org/3";

// API token for authentication
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTliZDVmMDM4ZDI3MDE1ZTMyOTRhZjQyNGM5NzA1YyIsInN1YiI6IjY0N2I0MWEyY2Y0YjhiMDBjM2QyMmQyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pa7rrihinMTebss5GMp1vYNg-SNIzH9AKUu3rx-PTP4"

// Headers for the API requests, including the authorization token
const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}

// Function to fetch data from the API
export const fetchData = async (url, params) => {
    try {
        //  GET request to the API with the given URL and parameters
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data; // Return the fetched data
    } catch (e) {
        console.log(e); // Log any errors to the console
        return e; // Return the error
    }
}
