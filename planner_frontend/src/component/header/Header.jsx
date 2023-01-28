import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../../assets/img/logo.png';

function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <nav className="navbar fw-bold header" >
                    <div className="ml-2">
                        <Link className="navbar-brand pl-5" to="/dashboard">
                            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                            <span className='text-white'>Planner</span>
                        </Link>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-light me-1 dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                            Dhanpal Rajpurohit
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li><Link to="/profile" class="dropdown-item">Profile</Link></li>
                            <li><Link to="/about" class="dropdown-item">About Us</Link></li>
                            <li><Link to="/" class="dropdown-item">Sign-Out</Link></li>
                        </ul>
                    </div>
                    {/* <Link to="/profile" className='btn btn-light me-1 fw-bold rounded-circle h-auto'>D</Link> */}
                </nav>
            </div>
        </div>
    )
}

export default Header;
