import { useDispatch, useSelector } from 'react-redux';
import { deleteWallet } from '../../requests/walletApi';
import './RemoveButton.css';
import { removeWallet, removeToken } from '../../store/actions';

function RemoveButton({wallet}) {
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.token);

    const handleClick = (e) => {
        e.preventDefault();
        balance.forEach((token) => {
            if (token.wallet_id === wallet.id) {
                dispatch(removeToken(wallet.id))
            }
        })

        console.log(wallet.id)
        deleteWallet(wallet.id);
        dispatch(removeWallet(wallet.id));
    }

    return (
        <div 
            className="remove-button-wrapper"
            onClick={handleClick}
        >
            <div className="delete_svg">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 24 24">
                    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                </svg>
            </div>
        </div>
    )
}

export default RemoveButton;