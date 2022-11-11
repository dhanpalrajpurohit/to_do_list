import React from 'react'

import './Popup.css';

function Popup(props) {
    return (
        <div className='popup'>
            <span style={{ fontSize: "100px" }}>&#128578;</span>
            <h2>Thank You</h2>
            <p>Your details has been successfully sumitted. Thanks!</p>
            <button type='button'>Ok</button>
        </div>
    )
}

export default Popup;
