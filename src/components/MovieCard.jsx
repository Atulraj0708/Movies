import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function MovieCard({ movie }) {
    // State to handle image loading errors
    const [imageError, setImageError] = useState(false);

    // Function to handle image loading errors
    const handleImageError = () => {
        setImageError(true);
    };

    // URL for the movie's poster image
    const imageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

    return (
        // Container Box for the movie card
        <Box sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
            {/* Card component with custom styles */}
            <Card sx={{ maxWidth: '100%', height: '100%', bgcolor: '#1f1d1d' }}>
                {/* Area of the card that can be clicked */}
                <CardActionArea sx={{ height: '100%' }}>
                    {/* Media component to display the movie poster */}
                    <CardMedia
                        component="img"
                        alt={movie?.title || movie?.name} // Alternative text for the image
                        image={imageError ? 'https://www.movienewz.com/img/films/poster-holder.jpg' : imageUrl} // Fallback image if error occurs
                        title={movie?.title || movie?.name} // Title of the movie
                        onError={handleImageError} // Error handling for image load failure
                        sx={{ height: 250, objectFit: 'cover' }} // Styling for the image
                    />
                    {/* Content of the card */}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {/* Title of the movie */}
                        <Typography
                            gutterBottom
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                            color={'#FFF'}
                            textAlign='center'
                            variant="body1"
                            component="div"
                            fontFamily='Inter'
                            fontSize={20}
                            fontWeight={20}
                        >
                            {movie.name || movie.title}
                        </Typography>
                        {/* Release date or first air date of the movie */}
                        <Typography
                            gutterBottom
                            sx={{ textOverflow: 'ellipsis', color: "#938f86" }}
                            textAlign='center'
                            variant="body2"
                            component="div"
                            fontFamily='Inter'
                            fontSize={16}
                            fontWeight={20}
                        >
                            {movie?.first_air_date || movie?.release_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            {/* Box to display the movie's rating */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: movie && movie.vote_average < 6.5 ? '#fd9d3f' : '#61fd00', // Color based on rating
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                }}
            >
                {movie?.vote_average?.toFixed(1) || "NA"} {/* Display rating or "NA" if not available */}
            </Box>
        </Box>
    );
}
