import { useDispatch } from 'react-redux';
import { createWallet } from '../../requests/WalletApi';
import { addWallet } from '../../store/actions';
import './AddWallet.css'
import { useEffect, useState } from 'react';

function AddWallet () {
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(null);
    const [addressError, setAddressError] = useState(null);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const [sendRequest, setSendRequest] = useState(false);

    useEffect(() => {
        const div = document.querySelector('#wallet_form');
        
        function unShowForm(e) {
            const withinBoundaries = e.composedPath().includes(div);
        
            if (!withinBoundaries) {
                setShow(false); 
            }
        };

        document.addEventListener('click', unShowForm)

        return () => {
            document.removeEventListener('click', unShowForm);
        }
    }, []);


    useEffect(() => {
      if (sendRequest === true) {
        const newWalet = new FormData();
        newWalet.append('wallet_name', name);
        newWalet.append('wallet_address', address);

        createWallet(newWalet)
        .then(data => {
            console.log(data);
            dispatch(addWallet(data));
        } )
        .catch((errors) => {
            setAddressError(errors.response.data);
          }
        )

        setAddress('');
        setName('');
      }
    }, [sendRequest])

    const handleClick = (e) => {
        e.preventDefault();
        if (address.length < 10){
          setAddressError("Error: Wallet address must be at least 10 characters long.");
        } else {
          setAddressError(null)
        }
        if (name.length < 4) {
          setNameError("Error: Wallet name must be at least 4 characters long.");
        } else {
          setNameError(null)
        }

        if (!addressError && !nameError) {
            setSendRequest(true);
        }
    }

    const clickShowButton = () => {
        setShow(state => !state);
    }

    return (
        <div id='wallet_form'>
            <button
                className={
                            // show?
                                // "wallet_button display_form display_form_show":
                                "wallet_button display_form"
                        }
                onClick={clickShowButton}
            >
                Add wallet
            </button>
            <div className='form' style={{display: show? "flex": "none"}}>
                <label htmlFor="new-add-name" className='label_wallet'>Wallet name</label>
                <input
                    type="text"
                    id="new-add-name"
                    className="inputWallet"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={event=>setName(event.target.value)}
                    placeholder="Name"
                />
                {nameError? <p className='error'>{nameError}</p>: null}
                <label htmlFor="new-add-address" className='label_wallet'>Wallet address</label>
                <textarea
                    type="text"
                    id="new-add-address"
                    className="inputWallet"
                    name="text"
                    autoComplete="off"
                    value={address}
                    onChange={event=>setAddress(event.target.value)}
                    placeholder="Address"
                />
                {addressError? <p className='error'>{addressError}</p>: null}
                <button type="submit" className="button-add" onClick={handleClick}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default AddWallet;
