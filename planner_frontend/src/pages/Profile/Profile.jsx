import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


import Header from '../../component/header/Header';
import ProfileCard from '../../component/ProfileCard/ProfileCard';
import { getTokenAPI, getUserAPI } from '../../store/services/authentication';


import { axiosInstance } from '../../Axios.jsx';


function Profile() {
    let navigate = useNavigate();
    const { isLoading, isError, isSuccess, errorMsg, data } = useSelector((state) => state.user);;
    const [user, setUser] = React.useState({ "name": null, "email": null, "profile_picture": null });
    const token = localStorage.getItem('token');
    const initialRender = useRef(true);

    useEffect(() => {
        if (!initialRender.current) {
            if (isSuccess) {
                setUser(data.user);
            } else {
                navigate("/");
            }
        } else {
            initialRender.current = false;
            dispatch(getUserAPI(details));
        }
        if (token === null) {
            navigate("/");
        }
        setUser(data.user);
    }, []);

    return (
        <div>
            <Header userdetail={user} />
            <ProfileCard userdetail={user}/>
        </div>
    )
}

export default Profile
