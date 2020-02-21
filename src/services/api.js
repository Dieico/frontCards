import axios from 'axios';

const url = "https://formcards.herokuapp.com/"

const api = axios.create({
    baseURL: url,
    headers: { 'Access-Control-Allow-Origin': '*' } 
});
 
export default api;