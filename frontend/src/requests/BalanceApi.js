import axios from 'axios';

 let host = '8adbbe6d6a9d.vps.myjino.ru'
//  let host = 'localhost:8000'

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
    const {data} = await axios.get(`http://${host}/api/balance/`)

    return data.data;
}

export const fetchBalance = async (id)  => {
    const {data} = await axios.get(`http://${host}/api/balance/` + id + "/");
    return data;
}

export const deleteBalance = async (id)=> {
    const {data} = await axios.delete(`http://${host}/api/balance/` + id + `/`);
    return data;
}