import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../store/actions';
import './AddToken.css'
import { fetchAllNetworks } from '../requests/NetworkApi';
import { createBalance } from '../requests/BalanceApi';

function  AddToken () {
    const wallets = useSelector(state => state.wallet);
    const [address, setAddress] = useState('');
    const [walletId, setWalletId] = useState(null);
    const [wopt, setWopt] = useState([]); 
    const [errors, setErrors] = useState({});

    const [submitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();

    const styles = {
        control: (styles, state) => ({ 
            ...styles, 
            fontSize: "13px",
            fontFamily: "'Roboto Mono', monospace;",
            border: '1px solid #e9ecef', 
            margin: "5px",
            marginBottom: "0px",
            boxShadow: 'none',
            cursor: "pointer",
            "&:hover": {
                outline: "0",
                border:  '1px solid #e9ecef',
                boxShadow: "0 0 0 0.1rem rgba(158, 158, 158, 0.25)",
            },
        }),
        option: (provided, state) => ({
            ...provided,
            color: "black",
            backgroundColor: "#fff",

            fontWeight: "normal",
            fontSize: "11px",
            fontFamily: "'Roboto Mono', monospace;",

            cursor: 'pointer',
            border: state.isFocused? '1px solid #e9ecef': "1px solid transparent",
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: "black",
            fontSize: "11px",
            fontFamily: "'Roboto Mono', monospace;",
            margin: "5px",
        }),
        menu: (provided, state) => ({
            ...provided,
            padding: 0,
            marginTop: "0px",
            width: "calc(100% - 10px)",
            marginLeft: "5px"
        }),
    };


    useEffect(() => {
       let wallet_opt = wallets.map((wallet) => {
            return { value: wallet.id, label: wallet.wallet_name }
        });

        setWopt(wallet_opt);


        // fetchAllNetworks().then(data => {
        //     console.log(data.data)
        // }) 
    }, [wallets])


    useEffect(() => {
        if (submitting && Object.keys(errors).length === 0) {
            console.log(address, walletId.value)
            // const newToken = new FormData();
            // newToken.append('asset_address', address);
            // newToken.append('wallet_id', String(walletId));
            // newToken.append('network_id', String(networkId));

            // createBalance(newToken)
            //     .then((result) => dispatch(addToken(result)))
            //     // .then(() => { 
            //     //     setShow(false); 
            //     //     setAddress("");
            //     //     setWalletId(null);
            //     //     setNetwrokId(null)
            //     // })
            //     .catch((err) => {
            //         setErrors({address:err.response.data})
            //     });
            
            setSubmitting(false);
        }
    }, [submitting])

    const validateToken = () => {
        let err = {};
        if (address.length < 10) {
            err.address = "Address is too short";
        }

        if (walletId === null) {
            err.wallet = "Choose wallet";
        }

        // if (inputValues.network === null) {
        //     errors.network = "Choose network";
        // }
    
        setErrors(err);
    };

    const handleClick = (e) => {
        e.preventDefault();
        validateToken();

        setSubmitting(true);
    }

    return (
        <div>
            <button type="submit" className="button-add" onClick={handleClick}>
                    Add token
            </button>
            <div className="add_token">
                <label htmlFor="new-add-address" className='label_token'>Token Address</label>
                <input 
                    type='text' 
                    placeholder='Address'
                    id="new-add-address"
                    className="inputToken"

                    value={address} 
                    onChange={e => setAddress(e.target.value)}
                />
                {errors.address? <p className='error'>{errors.address}</p>: null}
                <label className='label_token'>Wallet Name</label>
                <Select 
                    styles={styles} 
                    options={wopt}

                    value={walletId}
                    onChange={(choice) => setWalletId(choice)}
                />
                {errors.wallet? <p className='error'>{errors.wallet}</p>: null}
                {/* <Select 
                    styles={styles} 
                    options={nopt}

                    value={walletId}
                    onChange={(choice) => setWalletId(choice)}
                /> */}
                <button type="submit" className="button-add" style={{width: "100%"}} onClick={handleClick}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddToken;