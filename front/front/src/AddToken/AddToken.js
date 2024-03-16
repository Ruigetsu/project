import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToken } from '../store/actions';
import './AddToken.css'

function  AddToken () {
    const  [address, setAddress] = useState('')
    const [WalletAddress, setWaletAddress] = useState('')
    return (
        <div className="add_token">
            <label>Token Address</label>
            <input 
            type='text' 
            value={address} 
            onChange={e => setAddress(e.target.value)}
            placeholder='Address'
            />
            <label>Wallet Name</label>
            <select></select>
        </div>
    );
}