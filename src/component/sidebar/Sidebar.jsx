import React from 'react'

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaUserCircle
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import logo from '../../assets/img/logo.png'

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />
        }
    ]
    return (
        <div className="container bg-light p-1" style={{ height: '100vh' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" className="img-fluid" height={40} width={40}/><span className='fw-bold h5 p-2'>Planner</span>
                </a>
            </div>
            <div>
                <ul className='nav w-100'>
                    <li className="nav-item">
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className='nav-link'>
                                    <span className='me-2'>{item.icon}</span><span>{item.name}</span>
                                </NavLink>
                            ))
                        }
                    </li>
                </ul>
            </div>
            <div className="position-absolute bottom-0 start-0 p-3">
                <a className="btn btn-danger" href="#">
                <span className='fw-bold h5 pe-1' heigh="30px" width="30px"><FaUserCircle/></span><span className='fw-bold h5'>LogOut</span>
                </a>
            </div>
        </div>
    );
};

export default Sidebar
