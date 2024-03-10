import './WalletList.css'
import { useState } from 'react';
import AddForm from '../AddForm/AddForm.js'
import WalletItem from './WalletItem'

function WalletList(props) {
    const [wallet,setWallet] = useState([])
    return (
        <div>
            <h1>Wallet List</h1>
            <AddForm setWallet={setWallet}/>
            <ul 
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {
                  wallet.map((item, index)=>{
                     return  <WalletItem key={index} todo={item} index={index} setTodos={setWallet}></WalletItem>
                 })
                }
            </ul>
        </div>
    )
}

export default WalletList 