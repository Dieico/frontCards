import axios from 'axios';

const api = axios.create({
    baseURL: 'https://formcards.herokuapp.com',
});
 
export default api;