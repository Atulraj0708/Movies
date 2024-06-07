import React from 'react';
import useFetch from "../hooks";
import { Container, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function Trending() {
    // Use custom hook to fetch trending movies data
    const { data, loading } = useFetch(`/trending/all/day`);

    // If data is still loading, display a loading message
    if (loading) return <p>Loading</p>;

    return (
        <Container>
            {/* Header for the trending movies section */}
            <Typography fontSize={30} color={'#fd9d3f'} fontWeight={40} fontFamily='Inter' gutterBottom>
                Trending Movies
            </Typography>
            {/* Grid container to display the movie cards */}
            <Grid container spacing={2}>
                {
                    // Map over the fetched data to create a grid item for each movie
                    data?.results?.map((movie) => (
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
