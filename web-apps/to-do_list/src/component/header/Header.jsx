import React from 'react'

import logo from '../../assets/img/logo.png';

function Header() {
    return (
        <div className='header'>
            <nav className="navbar fw-bold header" >
                <a className="navbar-brand pl-5" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    <span className='text-white'>Planner</span>
                </a>
                <div>
                <button className='btn btn-warning me-1 fw-bold'>SignUp</button>
                <button className='btn btn-warning fw-bold'>SignIn</button>
            </div>
            </nav>
        </div>
    )
}

export default Header;
