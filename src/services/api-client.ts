import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '79afdfe5b87244aab4df7f56a60fd025'
    }
})