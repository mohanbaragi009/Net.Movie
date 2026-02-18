import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.omdbapi.com/',
});

export const API_KEY = '37a15e04';

export default instance;
