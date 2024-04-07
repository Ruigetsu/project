import './WalletList.css'
import WalletItem from './WalletItem'
import { useSelector } from 'react-redux';

function WalletList(props) {
    // const wallets = useSelector((state) => state.wallet);
    const wallets = [
        {wallet_name: "test", wallet_address: "0x1231231", wallet_sum: 2324}
    ]
    return (
        <div className='wallet_list'>
            <p className='wallet_wrapper_title'>Wallet List</p>
            <div className="wallets_wrapper">
                {wallets && wallets.map && wallets.map((wallet, index)=>{
                     return  <WalletItem key={wallet.id} wallet={wallet} index={index}/>
                 })
                }
            </div>
        </div>
    )
}

export default WalletList 