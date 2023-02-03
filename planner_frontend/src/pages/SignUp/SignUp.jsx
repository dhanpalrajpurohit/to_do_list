import React from 'react'

import { Twitter, Facebook, Google } from 'react-bootstrap-icons';

import './SignUp.css';

function SignUp() {
  return (
    // <div className='container'>
    //   <div className='d-flex justify-content-center'>
    //     <div className=''>
    //       <div className='text-center'><h1 className='display-5'>Signup to Continue</h1></div>
    //       <div>
    //         <form>
    //           <div class="mb-3">
    //             <label for="txt_name" class="form-label">Name</label>
    //             <input type="text" class="form-control" id="txt_name" />
    //           </div>
    //           <div class="mb-3">
    //             <label for="txt_email" class="form-label">Email</label>
    //             <input type="email" class="form-control" id="txt_email" />
    //           </div>
    //           <div class="mb-3">
    //             <label for="txt_password" class="form-label">Password</label>
    //             <input type="password" class="form-control" id="txt_password" />
    //           </div>
    //           <button type="submit" class="btn btn-primary">Submit</button>
    //         </form>
    //       </div>
    //       <div>
    //       </div>
    //       <div class="seperator"><b>or</b></div>
    //       <div className='social-icon' id="social-login">
    //         <div className='pt-1 pb-1'>
    //           <button type="submit" class="btn btn-primary">Google</button>
    //         </div>
    //         <div className='pt-1 pb-1'>
    //           <button type="submit" class="btn btn-primary">Facebook</button>
    //         </div>
    //         <div className='pt-1 pb-1'>
    //           <button type="submit" class="btn btn-primary">GitHub</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='container p-5'>
      <div className='row p-5'>
        <div className='col-md-6'>
          <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="login-page" className="img-fluid" height="80%" width="80%" />
        </div>
        <div className='col-md-6'>
          <div>
            <h3>Sign Up</h3>
            <div>
              <form className="w-75">
                <div className="form-group mb-3">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder='Username' />
                </div>
                <div className="form-group mb-3">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder='Email' />
                </div>
                <div className="form-group mb-3">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder='Full Name' />
                </div>
                <div className="form-group mb-3">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder='Password' />
                </div>
                <div className="form-check mb-3 p-0">
                  <span style={{ float: "right" }}>
                    <a className='text-decoration-none' href='/'>Already have account ??</a>
                  </span>
                </div>
                <div>
                  <button className="btn btn-primary" type="submit">Log In</button>

                </div>
                <hr />
              </form>
            </div>
            <div id="social-icons" className='d-flex flex-row justify-content-center w-75'>
              <div className="mx-1"><button className='btn btn-lg social-icons-google'><Google /></button></div>
              <div className="mx-1"><button className='btn btn-lg social-icons-facebook'><Facebook /></button></div>
              <div className="mx-1"><button className='btn btn-lg social-icons-twitter'><Twitter /></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUp
