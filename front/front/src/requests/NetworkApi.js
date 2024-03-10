import axios from 'axios';

let host = '127.0.0.1:8000'

export const fetchAllNetworks = async () => {
    const {data} = await  axios.get(`http://${host}/api/network/`);
    return data
}

export const fetchNetwork = async (id) => {
    const {data}  = await axios.get(`http://${host}/api/network/${id}/`);
    return  data;
}

export const deleteWallet = async (id)=> {
    const {data} = await axios.delete(`http://${host}/api/network/${id}/`);
    return data;
}