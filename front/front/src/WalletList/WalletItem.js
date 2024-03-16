import { useEffect, useRef, useState } from 'react';
import RemoveButton from './RemoveButton';
import './WalletItem.css'

function WalletItem({wallet, index}) {
    const ref = useRef(null);
    const [copy, setCopy] = useState(false);

    function copyText() {
        navigator.clipboard.writeText(wallet.wallet_address);
        setCopy(true);

        ref.current?.addEventListener('mouseleave', () => setCopy(false));
    }

    return (
        <div className='wallet_item_wrapper'>
            <div className='wallet_info'>
                <div>{wallet.wallet_name}</div>
                <div className='wallet_adress'>
                    {wallet.wallet_address.slice(0, 8)}
                    <div className="copy_address" onClick={copyText} ref={ref}>
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
                </div>
            </div>
            <RemoveButton wallet={wallet}/>
        </div>
    )
}

export default WalletItem;