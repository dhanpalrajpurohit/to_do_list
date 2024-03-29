import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./ProfileCard.css";
import { updateUserProfileAPI, getProfileAPI } from "../../store/services/authentication";

function ProfileCard(props) {
    const data = useSelector(state => state.user.data);
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [name, setName] = useState();

    useEffect(()=>{
        const fetchData = async() => {
            await dispatch(getProfileAPI());
            if(data && data.user){
                const updateUser = {
                    "name":data.user.name,
                    "email":data.user.email,
                    "profile_picture":data.user.profile_picture,
                }
                setUser(updateUser);
            }
        }
        fetchData();
    }, [])

    useEffect(()=>{
        const fetchData = async() => {
            if(data && data.user){
                const updateUser = {
                    "name":data.user.name,
                    "email":data.user.email,
                    "profile_picture":data.user.profile_picture,
                }
                setUser(updateUser);
            }
        }
        fetchData();
    }, [data]);

    return (
        <div className='profile'>
            <div className="row">
                <div className="col-sm-6 text-white mx-auto m-3">
                    <div className="container">
                        <div class="card mx-auto" style={{ width: "30rem" }}>
                            <div class="card-body">
                                <h5 class="card-header">Profile</h5>
                                <div className='w-100'>
                                    <img class="rounded-circle mx-auto d-block" src={`http://localhost:8000${user?.profile_picture}`} alt="profile" height={100} />
                                </div>
                                <h6 className='text-muted text-center'>{data && data.user && data.user.name}</h6>
                                <div className='p-3'>
                                    <form class="form-inline text-dark" onSubmit={(e) => props.userSubmitHandler(e, email, name)}>
                                        <div class="form-group m-3">
                                            <label for="formGroupExampleInput">Name</label>
                                            <input type="text" class="form-control mb-2 text-dark" id="formGroupExampleInput" placeholder="Example input" defaultValue={user?.name} onChange={(e) => {setName(e.target.value); setEmail(user.email)}} />
                                        </div>
                                        <div class="form-group m-3">
                                            <label for="formGroupExampleInput">Email Address</label>
                                            <input type="text" disabled={true} class="form-control text-dark" id="formGroupExampleInput" placeholder="Example input" defaultValue={user?.email} />
                                        </div>
                                        <button type="submit" class="btn btn-primary m-3">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
