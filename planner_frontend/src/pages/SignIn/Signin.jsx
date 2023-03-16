import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";

import './Signin.css';

import { Twitter, Facebook, Google } from 'react-bootstrap-icons';
import { isEmail, isEmpty, isContainWhiteSpace, isPassword } from "../../shared/validator";
import { HelpBlock, ErrorBlock } from '../../component/helpblock/HelpBlock';

import { useNavigate } from 'react-router-dom';

import { getTokenAPI, getUserAPI } from '../../store/services/authentication';
import { getUserSelector } from "../../store/slice/tokenSlicer";

function SignIn() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const initialRender = useRef(true);

  const [details, setDetails] = React.useState({ "email": "", "password": "" });
  const [errorMessage, setErrorMessage] = React.useState({ "email": "", "password": "", "default": "" });
  const { isLoading, isError, isSuccess, errorMsg, data } = useSelector((state)=>state.user);


  useEffect(() => {
    if(!initialRender.current) {
        if(isSuccess) {
          navigate("/dashboard");
         } else {
            navigate("/")
         }
    } else {
        initialRender.current = false;
    }
 }, [isSuccess]);


  const submitHandler = async(e) => {
    e.preventDefault();
    const isValidate = validateLoginForm();
    if (isValidate) {    
        const response = await dispatch(getTokenAPI(details));
        if(response.payload && response.payload["token"]){
          dispatch(getUserAPI(details));
        } 
      }
  }

  const validateLoginForm = e => {
    if (isEmpty(details.email)) {
      setErrorMessage({ ...errorMessage, "email": "Email can't be blank" });
      return false;
    } else if (!isEmail(details.email)) {
      setErrorMessage({ ...errorMessage, "email": "Please enter a valid email" });
      return false;
    }
    if (!isPassword(details.password)) {
      setErrorMessage({ ...errorMessage, "password": "Password can't be blank" });
      return false;
    } else if (isContainWhiteSpace(details.password)) {
      setErrorMessage({ ...errorMessage, "password": "Please enter a valid password" });
      return false;
    }
    return true;
  }

  return (
    <div className='container p-5'>
      <div className='row p-5'>
        <div className='col-md-6'>
          <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" className="img-fluid" alt="login" height="80%" width="80%" />
        </div>
        <div className='col-md-6'>
          <div>
            <h3>Sign In</h3>
            <div>
              {
                errorMessage.default && <ErrorBlock message={errorMessage.default} />
              }
              <form className="w-75" onSubmit={submitHandler}>
                <div className="form-group mb-3">
                  <label htmlFor="username">Email Address</label>
                  <input type="email" className="form-control" placeholder='Email Address' id="txt_email" onChange={e => setDetails({ ...details, "email": e.target.value })} />
                  {
                    errorMessage.email && <HelpBlock message={errorMessage.email} />
                  }
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" placeholder='Password' id="txt_password" onChange={e => setDetails({ ...details, "password": e.target.value })} />
                  {
                    errorMessage.password && <HelpBlock message={errorMessage.password} />
                  }
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

export default SignIn
