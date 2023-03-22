import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./ProfileCard.css";
import {updateUserProfileAPI, getProfileAPI} from "../../store/services/authentication";

function ProfileCard(props) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({"name": null, "email": props.userdetail.email});

    const submitHandler = () => {
        dispatch(updateUserProfileAPI(formData));
    }
    
    return (
        <div className='profile'>
            <div className="row">
                <div className="col-sm-6 text-white mx-auto m-3">
                    <div className="container">
                        <div class="card mx-auto" style={{ width: "30rem" }}>
                            <div class="card-body">
                                <h5 class="card-header">Profile</h5>
                                <div className='w-100'>
                                    <img class="rounded-circle mx-auto d-block" src={`http://localhost:8000${props.userdetail.profile_picture}`} alt="profile" height={100} />
                                </div>
                                <h6 className='text-muted text-center'>{props.userdetail.name}</h6>
                                <div className='p-3'>
                                    <form class="form-inline text-dark" onSubmit={submitHandler}>
                                        <div class="form-group m-3">
                                            <label for="formGroupExampleInput">Name</label>
                                            <input type="text" class="form-control mb-2 text-dark" id="formGroupExampleInput" placeholder="Example input" defaultValue={props.userdetail.name} onChange={(e)=>setFormData({"email": props.userdetail.email, "name":e.target.value})}/>
                                        </div>
                                        <div class="form-group m-3">
                                            <label for="formGroupExampleInput">Email Address</label>
                                            <input type="text"  disabled={true} class="form-control text-dark" id="formGroupExampleInput" placeholder="Example input" defaultValue={props.userdetail.email} />
                                        </div>
                                        <button type="submit" disabled={!formData.name} class="btn btn-primary m-3">Submit</button>
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
