import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import RemoveButton from './RemoveButton';
import './WalletItem.css'

function WalletItem({wallet, index}) {
    const [copy, setCopy] = useState(false);

    const onCopyText = () => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000); // Reset status after 2 seconds
    };

    return (
        <div className='wallet_item_wrapper'>
            <div className='wallet_info'>
                <div className='wallet_item_name'>{wallet.wallet_name}</div>
                <div className='wallet_adress'>
                    {wallet.wallet_address.slice(0, 8)}
                    <CopyToClipboard text={wallet.wallet_address} onCopy={onCopyText}>
                        <div className="copy_address">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                            </svg>
                            <div className="wallet_item_copy">
                                {
                                    !copy?
                                    "Copy":
                                    "Copied!"
                                }
                            </div>
                        </div>
                    </CopyToClipboard>
                <div className='wallet_sum'>{wallet.wallet_sum} $</div>
                </div>
            </div>
            <RemoveButton wallet={wallet}/>
        </div>
    )
}

export default WalletItem;