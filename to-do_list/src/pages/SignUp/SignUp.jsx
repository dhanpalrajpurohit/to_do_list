import React from 'react'

function SignUp() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className=''>
          <div className='text-center'><h1 className='display-5'>Signup to Continue</h1></div>
          <div>
            <form>
              <div class="mb-3">
                <label for="txt_name" class="form-label">Name</label>
                <input type="text" class="form-control" id="txt_name" />
              </div>
              <div class="mb-3">
                <label for="txt_email" class="form-label">Email</label>
                <input type="email" class="form-control" id="txt_email" />
              </div>
              <div class="mb-3">
                <label for="txt_password" class="form-label">Password</label>
                <input type="password" class="form-control" id="txt_password" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div>
          </div>
          <div class="seperator"><b>or</b></div>
          <div className='social-icon' id="social-login">
            <div className='pt-1 pb-1'>
              <button type="submit" class="btn btn-primary">Google</button>
            </div>
            <div className='pt-1 pb-1'>
              <button type="submit" class="btn btn-primary">Facebook</button>
            </div>
            <div className='pt-1 pb-1'>
              <button type="submit" class="btn btn-primary">GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
