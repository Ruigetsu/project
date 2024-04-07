import './AlertList.css'
import { useEffect, useState } from 'react';

function AlertList() {
    
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(state => !state);
    }
    
    return (
        <div className="alert_form">
            <div onClick={handleClick} className='alerts_header'>
                <div role="button" aria-describedby=":rdfu:" aria-expanded="true" aria-label="Close" style={{"WebkitUserSelect": "none", transition: "background 20ms ease-in 0s", cursor: "pointer", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "4px"}}>
                    <svg role="graphics-symbol" viewBox="0 0 12 12" className="chevronDownRoundedThick" style={{width: "12px", height: "12px", display: "block", flexShrink: 0, transition: "transform 200ms ease-out 0s", transform: show? "rotateZ(0deg)": "rotateZ(180deg)", opacity: 1, marginLeft: "5px"}}>
                        <path d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z">
                        </path>
                    </svg>
                </div>
                <div className='alerts_header_text'>
                    Notifications
                </div>
            </div>
            <div className='form' style={{display: show? "flex": "none"}}></div>
        </div>
    )
}

export default AlertList;