import React from 'react';
import { Container, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

function SearchResults(results) {
    console.log(results); // Log the results to the console for debugging purposes

    return (
        <Container>
            {/* Header for the search results section */}
            <Typography fontSize={30} fontWeight={40} color={'#fd9d3f'} fontFamily='Inter' gutterBottom>
                Search results...
            </Typography>
            {/* Grid container to display the movie cards */}
            <Grid container spacing={2}>
                {
                    // Map over the results to create a grid item for each movie
                    results?.results?.results?.map((movie) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
                            {/* MovieCard component for each movie */}
                            <MovieCard movie={movie} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default SearchResults;
