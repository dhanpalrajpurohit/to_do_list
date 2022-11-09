import React from 'react'
import './Signin.css';

import { FaFacebook } from "react-icons/fa";
import {isEmail, isEmpty, isContainWhiteSpace, isLength, isPassword} from "../../shared/validator";
import HelpBlock from '../../component/helpblock/HelpBlock';

import {axiosInstance} from '../../Axios.jsx';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [details, setDetails] = React.useState({ "email": "", "password": "" });
  const [error, setError] = React.useState({ "email": "", "password": "" });
  let navigate = useNavigate();


  const submitHandler = e => {
    e.preventDefault();
    const isValidate = validateLoginForm();
    if (!isValidate){

    }
    else{
      axiosInstance({
        url: "accounts/login/",
        method: "POST",
        data:details,
      }).then((response) => {
        const data = response.data;
        const token = data.token;
        localStorage.setItem('token',token)
        navigate("/dashboard");
     });
      
    }
  }

  const validateLoginForm = e => {
    if (isEmpty(details.email)) {
      setError({...error,"email":"Email can't be blank"});
      return false;
    } else if (!isEmail(details.email)) {
      setError({...error,"email":"Please enter a valid email"});
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
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className=''>
          <div className='text-center'><h1 className='display-5'>Login to continue</h1></div>
          <div>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="txt_email" className="form-label">Email</label>
                <input type="email" className="form-control" id="txt_email" onChange={e => setDetails({ ...details, "email": e.target.value })} />
                {
                  error.email && <HelpBlock message={error.email} />
                }
              </div>
              <div className="mb-3">
                <label htmlFor="txt_password" className="form-label">Password</label>
                <input type="password" className="form-control" id="txt_password" onChange={e => setDetails({ ...details, "password": e.target.value })} />
                {
                  error.password && <HelpBlock message={error.password} />
                }
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div>
          </div>
          <div className="seperator"><b>or</b></div>
          <div className='social-icon' id="social-login">
            <div className='pt-1 pb-1'>
              <button type="submit" className="btn btn-primary">Google</button>
            </div>
            <div className='pt-1 pb-1'>
              <button type="submit" className="btn btn-primary">Facebook</button>
            </div>
            <div className='pt-1 pb-1'>
              <button type="submit" className="btn btn-primary">GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
