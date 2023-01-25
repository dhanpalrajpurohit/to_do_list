import React from 'react';

import Header from '../../component/header/Header';


function Profile() {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-white mx-auto m-3">
                        <div className="container">
                            <div class="card mx-auto" style={{ width: "30rem" }}>
                                <div class="card-body">
                                    <h5 class="card-header">Profile</h5>
                                    <h6 className='text-muted text-center'>Dhanpal Rajpurohit</h6>
                                    <div className='p-3 '>
                                        <form class="form-inline text-dark">
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">full name</label>
                                                <input type="text" class="form-control mb-2 text-dark" id="formGroupExampleInput" placeholder="Example input" />
                                            </div>
                                            <div class="form-group m-3">
                                                <label for="formGroupExampleInput">email</label>
                                                <input type="text" class="form-control text-dark" id="formGroupExampleInput" placeholder="Example input" />
                                            </div>
                                            <button type="submit" class="btn btn-primary m-3">update</button>
                                        </form>
                                        {/* {showInputText && <div class="input-group mt-3">
                                            <input type="text" value={value} class="form-control text-dark" placeholder="Enter here..." aria-describedby="button-addon2" onChange={(e) => setValue(e.target.value)} />
                                            <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={() => handleClick()}><SendFill /></button>
                                        </div>} */}
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
