import axios from 'axios';

let host = '8adbbe6d6a9d.vps.myjino.ru'
// let host = 'localhost:8000'

export const fetchAllNetworks = async () => {
    
    const {data} = await  axios.get(`http://${host}/api/network/`);
    return data
}

export const fetchNetwork = async (id) => {
    const {data}  = await axios.get(`http://${host}/api/network/${id}/`);
    return  data;
}

export const deleteNetwork = async (id)=> {
    const {data} = await axios.delete(`http://${host}/api/network/${id}/`);
    return data;
}