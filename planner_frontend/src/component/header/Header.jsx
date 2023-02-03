import React, {useEffect} from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

import {axiosInstance} from '../../Axios.jsx';
import logo from '../../assets/img/logo.png';

function Header() {
    const [user, setUser] = React.useState({"name":null, "email": null})
    
useEffect(() => {
        axiosInstance({
          url: "get-profile/",
          method: "GET"
        }).then((response) => {
          const data = response.data.user;
          setUser({"name":data.name, "email": data['email']});
       });
      }, []);
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
                            {user.name}
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                            <li><Link to="/about" className="dropdown-item">About Us</Link></li>
                            <li><Link to="/" className="dropdown-item">Sign-Out</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;
