import React from 'react'
import './Signin.css';

import { Twitter, Facebook, Google } from 'react-bootstrap-icons';
import {isEmail, isEmpty, isContainWhiteSpace, isPassword} from "../../shared/validator";
// import HelpBlock from '../../component/helpblock/HelpBlock';

import {axiosInstance} from '../../Axios.jsx';
import { Navigate, useNavigate } from 'react-router-dom';

function SignIn() {
  const [details, setDetails] = React.useState({ "username": "", "password": "" });
  const [error, setError] = React.useState({ "username": "", "password": "" });
  let navigate = useNavigate();


  const submitHandler = e => {
    e.preventDefault();
    const isValidate = validateLoginForm();
    if (!isValidate){

    }
    else{
      axiosInstance({
        url: "get-token/",
        method: "POST",
        data:details,
      }).then((response) => {
        const data = response.data;
        const token = data.token;
        localStorage.setItem('token',token);
        return axiosInstance({
          url: "signin/",
          method: "POST",
          headers: "token "+localStorage.getItem('token'),
          data:details,
        }).then((response) => {
          console.log(response);
          navigate('/dashboard');         
       });
     });
      
    }
  }

  const validateLoginForm = e => {
    if (isEmpty(details.username)) {
      setError({...error,"username":"Email can't be blank"});
      return false;
    } else if (!isEmail(details.username)) {
      setError({...error,"username":"Please enter a valid email"});
      return false;
    }

    if (!isPassword(details.password)) {
      setError({...error,"password":"Password can't be blank"});
      return false;
    } else if (isContainWhiteSpace(details.password)) {
      setError({...error,"password":"Please enter a valid password"});
      return false;
    }
    return true;
  }

  return (
    // <div className='container'>
    //   <div className='d-flex justify-content-center'>
    //     <div className=''>
    //       <div className='text-center'><h1 className='display-5'>Login to continue</h1></div>
    //       <div>
    //         <form onSubmit={submitHandler}>
    //           <div className="mb-3">
    //             <label htmlFor="txt_email" className="form-label">Email</label>
    //             <input type="email" className="form-control" id="txt_email" onChange={e => setDetails({ ...details, "email": e.target.value })} />
    //             {
    //               error.email && <HelpBlock message={error.email} />
    //             }
    //           </div>
    //           <div className="mb-3">
    //             <label htmlFor="txt_password" className="form-label">Password</label>
    //             <input type="password" className="form-control" id="txt_password" onChange={e => setDetails({ ...details, "password": e.target.value })} />
    //             {
    //               error.password && <HelpBlock message={error.password} />
    //             }
    //           </div>
    //           <button type="submit" className="btn btn-primary">Submit</button>
    //         </form>
    //       </div>
    //       <div>
    //       </div>
    //       <div className="seperator"><b>or</b></div>
    //       <div className='social-icon' id="social-login">
    //         <div className='pt-1 pb-1'>
    //           <button type="submit" className="btn btn-primary">Google</button>
    //         </div>
    //         <div className='pt-1 pb-1'>
    //           <button type="submit" className="btn btn-primary">Facebook</button>
    //         </div>
    //         <div className='pt-1 pb-1'>
    //           <button type="submit" className="btn btn-primary">GitHub</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    // ----------Lates----------------
      <div className='container p-5'>
        <div className='row p-5'>
            <div className='col-md-6'>
                <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" className="img-fluid" alt="login" height="80%" width="80%" />
            </div>
            <div className='col-md-6'>
                <div>
                    <h3>Sign In</h3>
                    <div>
                        <form className="w-75" onSubmit={submitHandler}>
                            <div className="form-group mb-3">
                                <label htmlFor="username">Email Address</label>
                                <input type="email" className="form-control" placeholder='Email Address' id="txt_email" onChange={e => setDetails({ ...details, "username": e.target.value })}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder='Password' id="txt_password" onChange={e => setDetails({ ...details, "password": e.target.value })}/>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Remember Me
                                </label>
                                <span style={{ float: "right" }}>
                                    <a className='text-decoration-none pt-3' href='#'>Forgot Password ??</a>
                                </span>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit">Log In</button>
                                <span style={{ float: "right" }} className='pt-3'>
                                    <a className='text-decoration-none' href='/signup'>Create an account ??</a>
                                </span>
                            </div>
                            
                            <hr />
                        </form>
                    </div>
                    <div id="social-icons" className='d-flex flex-row justify-content-center w-75'>
                        <div className="mx-1"><button className='btn btn-lg social-icons-google'><Google/></button></div>
                        <div className="mx-1"><button className='btn btn-lg social-icons-facebook'><Facebook/></button></div>
                        <div className="mx-1"><button className='btn btn-lg social-icons-twitter'><Twitter/></button></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default SignIn
