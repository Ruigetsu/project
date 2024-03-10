import { CreateWallet } from '../requests/WalletApi';
import './AddForm.css'
import { useState } from 'react';

function AddForm () {
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        if (address.length < 10){
          setNameError("Error: Wallet address must be at least 10 characters long.");
          console.log(nameError)
        }
        else if (name.length < 4) {
          setNameError("Error: Wallet name must be at least 4 characters long.");
          console.log(nameError)
        } else {
          let newWallet = [];
          newWallet.append('wallet_name', name);
          newWallet.append('wallet_address', address);
          CreateWallet(newWallet).then((res)=>{console.log(res)})
        }
      }
    return (
      <main>
        <form className='Form'>
          <h2 className="label-wrapper">
            <label className="label__lg">
              New Wallet
            </label>
          </h2>
          <input
            type="text"
            id="new-add-input"
            className="input1"
            name="text"
            autoComplete="off"
            value={name}
            onChange={event=>setName(event.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            id="new-add-input2"
            className="input2"
            name="text"
            autoComplete="off"
            value={address}
            onChange={event=>setAddress(event.target.value)}
            placeholder="Address"
          />
          <button type="submit" className="button-add" onClick={handleClick}>
            Add
          </button>
        </form>
      </main>  
    )
}

export default AddForm;
