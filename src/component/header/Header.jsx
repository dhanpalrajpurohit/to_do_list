import React from 'react'
import './Header.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='container'>
        <div className='header'>
            <nav className="navbar fw-bold header" >
                <div>
                <a className="navbar-brand pl-5" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    <span className='text-white'>Planner</span>
                </a>
                </div>
                <div>
                <Link to="/profile" className='btn btn-light me-1 fw-bold rounded-circle h-auto'>D</Link>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default Header;
