import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
    },
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
