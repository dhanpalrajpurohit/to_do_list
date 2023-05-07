import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


import Header from '../../component/header/Header';
import ProfileCard from '../../component/ProfileCard/ProfileCard';
import { updateUserProfileAPI, getProfileAPI } from '../../store/services/authentication';



function Profile() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.data);
    const [user, setUser] = useState({ "name": null, "email": null, "profile_picture": null });

    useEffect(() => {
        dispatch(getProfileAPI());
    }, [dispatch]);

    useEffect(() => {
        if (data && data.user && data.user.name) {
            const updatedUser = {
                "name": data.user.name,
                "email": data.user.email,
                "profile_picture": data.user.profile_picture,
            };
            setUser(updatedUser);
        }
    }, [data]);

    const submitHandler = async (e, email, name) => {
        e.preventDefault();
        const formdata = {"name":name,
        "email":email};
        await dispatch(updateUserProfileAPI(formdata));
        await dispatch(getProfileAPI());
        const updatedUser = {
            "name": data.user.name,
            "email": data.user.email,
            "profile_picture": data.user.profile_picture,
        };
        setUser(updatedUser);
    }

    return (
        <div>
            <Header userdetail={user} />
            <ProfileCard userdetail={user} userSubmitHandler={submitHandler} />
        </div>
    )
}

export default Profile
