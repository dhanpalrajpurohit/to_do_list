import React, { useEffect } from 'react';
import './Profile.css';
import Header from '../../component/header/Header';

import { axiosInstance } from '../../Axios.jsx';


function Profile() {
    const [user, setUser] = React.useState({"name":null, "email": null, "profile_picture": null});
    useEffect(() => {
        axiosInstance({
          url: "get-profile/",
          method: "GET",
          headers: {
            'Authorization': `token ${localStorage.getItem('token')}`
          }
        }).then((response) => {
          const data = response.data.user;
          setUser({"name":data.name, "email": data.email, "profile_picture":data.profile_picture});
        });
      }, []);
    return (
        <div>
            <Header userdetail={user}/>
            <div className='profile'>
                <div className="row">
                    <div className="col-sm-6 text-white mx-auto m-3">
                        <div className="container">
                            <div class="card mx-auto" style={{ width: "30rem" }}>
                                <div class="card-body">
                                    <h5 class="card-header">Profile</h5>
                                    <div className='w-100'>
                                    <img class="rounded-circle mx-auto d-block" src={`http://localhost:8000${user.profile_picture}`} alt="profile" height={100}/>
                                    </div>
                                    <h6 className='text-muted text-center'>{user.name}</h6>
                                    <div className='p-3 '>
                                        <form class="form-inline text-dark">
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">Name</label>
                                                <input type="text" class="form-control mb-2 text-dark" id="formGroupExampleInput" placeholder="Example input" value={user.name} />
                                            </div>
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">Email Address</label>
                                                <input type="text" class="form-control text-dark" id="formGroupExampleInput" placeholder="Example input" value={user.email}/>
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
