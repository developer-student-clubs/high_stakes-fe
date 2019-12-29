import axios from 'axios';
const api_url="http://localhost:3000";
export class  APIService
{
    constructor()
    {

    }
    getProfile()
    {
        const url=`${api_url}/profile/`;
        return axios.get(url).then(response=>response.data);

    }
}