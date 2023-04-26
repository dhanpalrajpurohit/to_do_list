import React from 'react'

import './index.css';

function index() {
    return (
        <div id="social-icons" className='d-flex flex-row justify-content-center w-75'>
            <div className="mx-1"><button className='btn btn-lg social-icons-google'><Google /></button></div>
            <div className="mx-1"><button className='btn btn-lg social-icons-facebook'><Facebook /></button></div>
            <div className="mx-1"><button className='btn btn-lg social-icons-twitter'><Twitter /></button></div>
        </div>
    )
}

export default index
