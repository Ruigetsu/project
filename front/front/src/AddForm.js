import './App.css'
import { useState } from 'react';

function RegForm () {
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const handleClick = (e) => {
        e.preventDefault();
        console.log("address: ",  address);
        console.log("password: ", name)
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
            value={address}
            onChange={event=>setAddress(event.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            id="new-add-input2"
            className="input2"
            name="text"
            autoComplete="off"
            value={name}
            onChange={event=>setName(event.target.value)}
            placeholder="Address"
          />
          <button type="submit" className="btn btn__primary btn__lg" onClick={handleClick}>
            Add
          </button>
        </form>
      </main>  
    )
}

export default RegForm;
