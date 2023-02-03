import React from 'react';
import './Profile.css';
import Header from '../../component/header/Header';


function Profile() {
    return (
        <div>
            <Header />
            <div className='profile'>
                <div className="row">
                    <div className="col-sm-6 text-white mx-auto m-3">
                        <div className="container">
                            <div class="card mx-auto" style={{ width: "30rem" }}>
                                <div class="card-body">
                                    <h5 class="card-header">Profile</h5>
                                    <div className='w-100'>
                                    <img class="rounded-circle mx-auto d-block" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="profile" height={100}/>
                                    </div>
                                    <h6 className='text-muted text-center'>Dhanpal Rajpurohit</h6>
                                    <div className='p-3 '>
                                        <form class="form-inline text-dark">
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">Name</label>
                                                <input type="text" class="form-control mb-2 text-dark" id="formGroupExampleInput" placeholder="Example input" />
                                            </div>
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">Email Address</label>
                                                <input type="text" class="form-control text-dark" id="formGroupExampleInput" placeholder="Example input" disabled/>
                                            </div>
                                            <button type="submit" class="btn btn-primary m-3">update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
