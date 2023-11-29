import React from 'react';
import Header from './Header';
import Footer from './Footer';

function SignIn() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-3">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-dark fs-5">Sign In</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-login text-uppercase fw-bold" type="submit" style={{backgroundColor:"indigo",color:"white"}}>Sign in</button>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <button className="btn btn-danger btn-google text-uppercase fw-bold" type="submit">
                      <i className="fab fa-google"></i> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button className="btn  text-uppercase fw-bold " type="submit" style={{backgroundColor:"#1877f2",color:"white"}}>
                    Sign in with Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
