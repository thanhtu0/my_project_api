import FootballHighlights from '~/components/FootballHighlight';
import './App.css';
import { Typography } from '@mui/material';

const App = () => {
    return (
        <div className="App">
            <Typography
                variant="h3"
                component="h3"
                sx={{
                    color: '#1976d2',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                Football Highlights
            </Typography>
            <FootballHighlights />
        </div>
    );
};

export default App;
