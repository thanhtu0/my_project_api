import { useState, useEffect } from 'react';
import './App.css';
import { Box, Button, Container, List, ListItem, Typography } from '@mui/material';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // get api Implement
        const url = 'https://jsonplaceholder.typicode.com/comments';
        fetch(url, {
            headers: {
                companyId: '47856784365874387',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log('jsonnnn', json);
                setData(json);
            })
            .catch((e) => {
                console.log('e', e);
            });
    }, []);
    // post and put api implement
    const postPutEvent = () => {
        const data = {
            id: '501',
            name: 'Seema',
            mobile: '767676786',
            designation: 'developer',
            pin: '45678',
        };
        const url = data.id
            ? `https://jsonplaceholder.typicode.com/comments/${data.id}`
            : 'https://jsonplaceholder.typicode.com/comments';
        fetch(url, {
            method: data.id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                console.log('response', response);
                if (response.status === 200) {
                    alert('success');
                }
            })
            .catch((e) => {
                console.log('e', e);
            });
    };
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h2" component="h2" gutterBottom>
                    Welcome
                </Typography>
                <List>
                    {data.map((item) => (
                        <ListItem key={item.id}>
                            <Typography variant="body1">{item.email}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Button outline onClick={postPutEvent}>
                Submit
            </Button>
        </Container>
    );
};

export default App;
