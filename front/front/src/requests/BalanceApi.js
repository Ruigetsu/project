import axios from "axios";

let host = '3f9215732d0c.vps.myjino.ru'
 
export const fetchAllBalances = async () => {
    const {data} = await  axios.get(`http://${host}/api/balance/`);
    return data.data;
}


export const createBalance = async (balance) => {
    const config = {
        headers: {
            'Content-Type':'multipart/form-data'
        }
    }
    
    const {data} = await axios.post(`http://${host}/api/balance/`, balance, config);
    return data
}

export const fetchBalance = async (id) => {
    const {data}  = await axios.get(`http://${host}/api/balance/${id}/`);
    return  data;
}

export const deleteBalance = async (id)=> {
    const {data} = await axios.delete(`http://${host}/api/balance/${id}/`);
    return data;
}