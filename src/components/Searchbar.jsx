import React, { useState } from 'react';
import { Box, Container, IconButton, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchData } from "../hooks/fetchData";
import home from './homeg.webp';

const Searchbar = ({ setSearchResults }) => {
    // State to hold the current search query
    const [query, setQuery] = useState('');

    // Function to handle the search action
    const handleSearch = () => {
        fetchData(`/search/multi?query=${query}&page=1`).then((res) => {
            setSearchResults(res); // Update search results with fetched data
        });
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                height: '385px',
                minHeight: '100vh',
                overflow: 'hidden',
            }}
        >
            {/* Background image container */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${home})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    zIndex: -1,
                    filter: 'brightness(50%)', // Darken the background image
                }}
            />
            {/* Semi-transparent overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
                    zIndex: -1,
                }}
            />
            {/* Welcome text */}
            <Typography fontFamily={'Inter'} sx={{
                minWidth: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                fontSize: '4rem',
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'center',
                color: 'white', // Ensure text is white for readability
                zIndex: 1,
            }}>
                Welcome to <Typography fontSize={40} marginLeft={1} color={'#fd9d3f'}>Atflix...</Typography>
            </Typography>
            {/* Search bar container */}
            <Box display="flex" minWidth={'70vw'} sx={{
                height: '4rem',
                bgcolor: '#ffffff',
                borderRadius: 40,
                zIndex: 1,
            }} alignItems="center">
                {/* Input field for search queries */}
                <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: '2rem' }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(event) => setQuery(event.target.value)} // Update query state on input change
                    required
                />
                {/* Search button container */}
                <Box width="20%"
                     sx={{
                         height: '4rem',
                         background: 'linear-gradient(to right bottom, #ff7e00, #191a18)',
                         borderTopRightRadius: 40,
                         borderBottomRightRadius: 40,
                     }}
                >
                    {/* Search button */}
                    <IconButton
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 0
                        }}
                        onClick={handleSearch} // Trigger search on click
                    >
                        <SearchIcon style={{ color: 'white' }} />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
};

export default Searchbar;
