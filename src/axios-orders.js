import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-fb669-default-rtdb.firebaseio.com/'
});

export default instance;