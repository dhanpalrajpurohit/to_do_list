import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


// import { Twitter, Facebook, Google } from 'react-bootstrap-icons';

import './SignUp.css';
import {signupAPI} from '../../store/services/authentication';

function SignUp() {

  let navigate = useNavigate();

  const [form, setForm] = useState({"email": null, "name": null, "password": null, "password2": null})

  const submitHandler = async(e) => {
    e.preventDefault();
    const response = await signupAPI(form);
    if(response.status===200){
      navigate("/");
    }
  }

  return (
    <div className='container p-5'>
      <div className='row p-5'>
        <div className='col-md-6'>
          <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="login-page" className="img-fluid" height="80%" width="80%" />
        </div>
        <div className='col-md-6'>
          <div>
            <h3>Sign Up</h3>
            <div>
              <form className="w-75" onSubmit={submitHandler}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder='Email' onChange={(e)=>setForm({...form, "email": e.target.value})}/>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder='Full Name' onChange={(e)=>setForm({...form, "name": e.target.value})}/>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder='Password' onChange={(e)=>setForm({...form, "password": e.target.value})}/>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm_password" placeholder='Confirm Password' onChange={(e)=>setForm({...form, "password2": e.target.value})}/>
                </div>
                <div className="form-check mb-3 p-0">
                  <span style={{ float: "right" }}>
                    <a className='text-decoration-none' href='/'>Already have account ??</a>
                  </span>
                </div>
                <div>
                  <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
                <hr />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUp
