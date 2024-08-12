import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const items = [
    { title: 'Free Video Widget', icon: '▶️', alt: 'Free Video Widget' },
    { title: 'Free Video API', icon: '🔌', alt: 'Free Video API' },
    { title: 'Free Livescore Widget', icon: '📊', alt: 'Free Livescore Widget' },

    { title: 'Premier League', icon: '~/assets/images/logo/Primier League', alt: 'Premier League' },
    { title: 'La Liga', icon: '⚽', alt: 'La Liga' },
    { title: 'Serie A', icon: '🇮🇹', alt: 'Serie A' },
    { title: 'Bundesliga', icon: '🇩🇪', alt: 'Bundesliga' },
    { title: 'Ligue 1', icon: '🇫🇷', alt: 'Ligue 1' },
    { title: 'V-League', icon: '🇻🇳', alt: 'V-League' },
    { title: 'All Competitions', icon: '🏁', alt: 'All Competitions' },
    { title: 'Sign In', icon: '🔑', alt: 'Sign In' },
];

const SideBar = () => {
    return (
        <Box p={4} bgcolor="background.default" color="text.primary">
            <Typography variant="h4" component="h1" gutterBottom>
                Developer Tools
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
                {items.slice(0, 3).map((item, index) => (
                    <Card key={index} sx={{ mb: 2 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <CardMedia
                                    component="img"
                                    alt={item.alt}
                                    image={`https://openui.fly.dev/openui/24x24.svg?text=${item.icon}`}
                                    sx={{ width: 24, height: 24 }}
                                />
                                <Typography variant="body1" sx={{ ml: 2 }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                Top Leagues
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
                {items.slice(3, 9).map((item, index) => (
                    <Card key={index} sx={{ mb: 2 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <CardMedia
                                    component="img"
                                    alt={item.alt}
                                    image={`https://openui.fly.dev/openui/24x24.svg?text=${item.icon}`}
                                    sx={{ width: 24, height: 24 }}
                                />
                                <Typography variant="body1" sx={{ ml: 2 }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                More
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
                {items.slice(9).map((item, index) => (
                    <Card key={index} sx={{ mb: 2 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <CardMedia
                                    component="img"
                                    alt={item.alt}
                                    image={`https://openui.fly.dev/openui/24x24.svg?text=${item.icon}`}
                                    sx={{ width: 24, height: 24 }}
                                />
                                <Typography variant="body1" sx={{ ml: 2 }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default SideBar;
