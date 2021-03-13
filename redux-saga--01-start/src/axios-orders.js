import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-by-burger-ab41a.firebaseio.com/'
});

export default instance;