import axios from 'axios';

const https = axios.create({
    baseURL: 'https://burger-react-app-f10de.firebaseio.com/'
});

export default https;