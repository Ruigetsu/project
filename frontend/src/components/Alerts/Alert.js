import { useState } from 'react';


function Alert({alert}) {

    const formatDate = (date) => {
        let d = new Date(date);
        
        let hh = d.getHours();
        let mm = d.getMinutes();
        let ss = d.getSeconds();

        return `${hh}:${mm}:${ss}`
    }

    return (
        <div className='alert_wrapper'>
            <div className='alert_item'>
                <div className='allet_wallet'>{alert.wallet}</div>
                <div className='alert_token'>{alert.token}</div>
            </div>
            <div className="alert_item">
                <div className={alert.balance>0? "up": alert.balance<0? "down": "null"} style={{marginLeft: "50px"}}>
                    {alert.balance.toFixed(4)}
                </div>
                <div className={alert.price>0? "up": alert.price<0? "down": "null"}>
                    {alert.price.toFixed(4)}
                </div>
            </div>
            <div className="alert_time">
                {formatDate(alert.updated)}
            </div>
        </div>
        
    )
}

export default Alert;