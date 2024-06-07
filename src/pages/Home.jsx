import React, { useState } from 'react';
import { Container } from "@mui/material";
import Trending from "../components/Trending";
import Searchbar from "../components/Searchbar";
import SearchResults from "../components/SearchResults";

function Home(props) {
    // State to hold the search results
    const [searchresults, setSearchResults] = useState(null);

    return (
        <Container maxWidth="xl">
            {/* Search bar component with props to manage search results */}
            <Searchbar searchresults={searchresults} setSearchResults={setSearchResults} />
            
            {/* Conditional rendering of search results if available */}
            {searchresults && <SearchResults results={searchresults} />}
            
            {/* Trending movies component */}
            <Trending />
        </Container>
    );
}

export default Home;
