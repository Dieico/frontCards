import axios from 'axios';

const url = "http://localhost:3030/"

const api = axios.create({
    baseURL: url,
    headers: { 'Access-Control-Allow-Origin': '*' } 
});
 
export default api;