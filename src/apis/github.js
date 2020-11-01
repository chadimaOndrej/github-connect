import axios from 'axios';

export default axios.create({
    baseURL: "https://api.github.com/users",
    params: {
        scopes: 'public_rep'
    }
})