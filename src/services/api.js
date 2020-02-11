import axios from 'axios';

const api = axios.create({
    baseURL: 'https://formcards.herokuapp.com',
    headers: { 'Access-Control-Allow-Origin': '*' } 
});
 
export default api;