import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import './Header.css';

import logo from '../../assets/img/logo.png';
import {logoutAPI} from "../../store/services/authentication";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state => state.user.data);

    const handleLogout = () => {
        logoutAPI();
        navigate("/");
        localStorage.clear();
        
    }

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
                    
                    <div className="dropdown">
                        <button className="btn btn-light me-1 dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                            {data && data.user && data.user.name}
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                            <li><Link to="/about" className="dropdown-item">About Us</Link></li>
                            <li><button onClick={() => handleLogout()} className="dropdown-item">Sign-Out</button></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;
