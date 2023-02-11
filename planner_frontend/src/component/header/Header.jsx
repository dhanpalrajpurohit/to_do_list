import React, { useEffect } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';
import './Header.css';

import { Link } from 'react-router-dom';

import { axiosInstance } from '../../Axios.jsx';
import logo from '../../assets/img/logo.png';

function Header(props) {
    let navigate = useNavigate();
    const handleLogout = () => {
        const data = {
            'token' : localStorage.getItem('token')
        }
        axiosInstance({
            url: "logout/",
            method: "POST",
            data:data,
            headers: {
                'Authorization': `token ${localStorage.getItem('token')}`
            }
          }).then((response) => {
            if(response.status===204){
                localStorage.clear();
                navigate("/");
            }
         });
    }
    if(localStorage.getItem('token')===null){
        console.log(localStorage.getItem('token'));
        navigate("/");
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
                            {props.userdetail.name}
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
