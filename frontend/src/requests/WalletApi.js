import axios from "axios";

let host = '8adbbe6d6a9d.vps.myjino.ru'
//let host = 'localhost:8000'

export const fetchAllWallets = async () => {
    
    const {data} = await  axios.get(`http://${host}/api/wallet/`);
    return data.data
}


export const createWallet = async (wallet) => {
    const config = {
        headers: {
            'Content-Type':'multipart/form-data'
        }
    }
    
    const {data} = await axios.post(`http://${host}/api/wallet/`, wallet, config);
    return data
}

export const fetchWallet = async (id) => {
    const {data}  = await axios.get(`http://${host}/api/wallet/${id}/`);
    return  data;
}

export const deleteWallet = async (id)=> {
    const {data} = await axios.delete(`http://${host}/api/wallet/${id}/`);
    return data;
}