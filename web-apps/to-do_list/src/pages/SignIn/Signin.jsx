import React from 'react'
import './Signin.css';

import { FaFacebook } from "react-icons/fa";
import { isEmail, isEmpty, isContainWhiteSpace, isLength, isPassword } from "../../shared/validator";
import HelpBlock from '../../component/helpblock/HelpBlock';

import { axiosInstance } from '../../Axios.jsx';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [details, setDetails] = React.useState({ "email": "", "password": "" });
  const [error, setError] = React.useState({ "email": "", "password": "", "login_details": "" });
  let navigate = useNavigate();


  const submitHandler = e => {
    e.preventDefault();
    console.log("work")
    const isValidate = validateLoginForm();
    if (!isValidate) {

    }
    else {
      axiosInstance({
        url: "accounts/login/",
        method: "POST",
        data: details,
      }).then((response) => {
        const data = response.data;
        const token = data.token;
        localStorage.setItem('token', token)
        navigate("/profile");
      })
      .catch((error) => {
        const error_msg = error.response.data;
        console.log(error_msg)
        setError({"login_details": error_msg['errors']});
      });

    }
  }

  const validateLoginForm = e => {
    if (isEmpty(details.email)) {
      setError({ ...error, "email": "Email can't be blank" });
      return false;
    } else if (!isEmail(details.email)) {
      setError({ ...error, "email": "Please enter a valid email" });
      return false;
    }

    if (!isPassword(details.password)) {
      setError({ ...error, "password": "Password can't be blank" });
      return false;
    } else if (isContainWhiteSpace(details.password)) {
      setError({ ...error, "password": "Please enter a valid password" });
      return false;
    }
    return true;
  }

  return (
    <div>
      <section class="vh-100">
        <div class="container-fluid h-custom text-white">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
                alt="Sample image" />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            
            {
                    error.login_details && <div class="alert alert-danger" role="alert">{error.login_details}</div>
            }
              <form onSubmit={submitHandler}>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Enter a valid email address" onChange={e => setDetails({ ...details, "email": e.target.value })} />
                  {
                    error.email && <HelpBlock message={error.email} />
                  }
                </div>


                <div class="form-outline mb-3">
                  <label class="form-label" for="form3Example4">Password</label>

                  <input type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter password" onChange={e => setDetails({ ...details, "password": e.target.value })} />
                  {
                    error.password && <HelpBlock message={error.password} />
                  }
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" id="form2Example3" />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" class="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                    class="link-danger">Register</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn
