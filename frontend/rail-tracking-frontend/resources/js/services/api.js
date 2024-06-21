import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5001/api', // URL backend .NET API Anda
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
