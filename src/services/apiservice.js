import axios from 'axios';
const API_URL = 'http://localhost:3000';

export class APIService {

    constructor() {
    }
    getProfile() {
        const url = `${API_URL}/auth/github/`;
        var x =axios.get(url).then(response => response.data)
        
        console.log(x);
        return x;
    }
}