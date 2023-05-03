import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';


import Header from '../../component/header/Header';
import ProfileCard from '../../component/ProfileCard/ProfileCard';
import { updateUserProfileAPI, getProfileAPI } from '../../store/services/authentication';



function Profile() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.data);
    const [user, setUser] = useState({ "name": null, "email": null, "profile_picture": null });
    const [formData, setFormData] = useState({ "name": null, "email": null });
    const [profile, setProfile] = useState();

    useEffect(()=>{
        setProfile(<ProfileCard userdetail={user} userSubmitHandler={submitHandler}/>);
    },[])

    useEffect(() => {
        dispatch(getProfileAPI());
    }, [dispatch]);

    useEffect(() => {
        if (data !== null && data !== undefined) {
            const updatedUser = {
                "name": data.user.name,
                "email": data.user.email,
                "profile_picture": data.user.profile_picture,
            };
            setUser(updatedUser);
        }
    }, [data]);

    const submitHandler = async (e, formdata) => {
        e.preventDefault();
        setFormData(formdata);
        await dispatch(updateUserProfileAPI(formdata));
        await dispatch(getProfileAPI());
        const updatedUser = {
            "name": data.user.name,
            "email": data.user.email,
            "profile_picture": data.user.profile_picture,
        };
        setUser(updatedUser);
        console.log(user);
        setProfile(
            <ProfileCard userdetail={user} userSubmitHandler={submitHandler} />
        );
    }

    return (
        <div>
            <Header userdetail={user} />
            {profile}
            {/* <div className='profile'>
                <div className="row">
                    <div className="col-sm-6 text-white mx-auto m-3">
                        <div className="container">
                            <div class="card mx-auto" style={{ width: "30rem" }}>
                                <div class="card-body">
                                    <h5 class="card-header">Profile</h5>
                                    <div className='w-100'>
                                        <img class="rounded-circle mx-auto d-block" src={`http://localhost:8000${user.profile_picture}`} alt="profile" height={100} />
                                    </div>
                                    <h6 className='text-muted text-center'>{user.name}</h6>
                                    <div className='p-3'>
                                        <form class="form-inline text-dark" onSubmit={submitHandler}>
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">Name</label>
                                                <input type="text" class="form-control mb-2 text-dark" id="formGroupExampleInput" placeholder="Example input" defaultValue={user.name} onChange={(e) => setFormData({ ...formData, "name": e.target.value })} />
                                            </div>
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">Email Address</label>
                                                <input type="text" disabled={true} class="form-control text-dark" id="formGroupExampleInput" placeholder="Example input" defaultValue={user.email} />
                                            </div>
                                            <button type="submit" disabled={!formData.name} class="btn btn-primary m-3">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Profile
