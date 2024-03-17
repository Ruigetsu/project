

function  WalletItem ({wallet, index, setWallet}) {
    const handleClick = (e) =>{
        e.preventDefault()
        setWallet(wallet=>wallet.filter((_,i) => i!==index))
    }
    return (
        <div>
            <button type="button" className='btn delete' onClick={handleClick}>
                Delete <span className="visually-hidden">{wallet}</span>
            </button>
        </div>   
    )
}

export default WalletItem