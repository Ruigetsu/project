import axios from 'axios';

let host = '3f9215732d0c.vps.myjino.ru'
// let host = '127.0.0.1:8000'

export const createBalance = async (wallet) => {
    const config = {
        headers: {
         'Content-Type': 'multipart/form-data'        
        }
    }
    const {data} = await axios.post(`http://${host}/api/balance/`, wallet, config);
    return data
}

export const fetchAllBalances = async ()  => {
    const {data} = await  axios.get("http://127.0.0.1:8000/api/balance/");
    return data.data
}

export const fetchBalance = async (id)  => {
    const {data} = await  axios.get(`http://${host}/api/balance/${id}/`);
    return data
}


export const deleteBalance = async (id)=> {
    const {data} = await axios.delete(`http://${host}/api/balance/${id}/`);
    return data;
}