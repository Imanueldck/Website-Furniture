import React from "react";
import { Link } from "react-router-dom";

import "../css/Login.css";

const Register = () => {
  return (
    <div className="d-flex align-items-center min-vh-100 py-4 bg-body-tertiary">
      <div className="form-signin w-100 m-auto">
        <form>
          {/* <img
        className="mb-4"
        src="../assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      /> */}
          <h1 className="h3 mb-3 fw-normal">Register</h1>

          <div className="form-floating">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="name"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="text-start my-3">
            <Link to="/login">Have account? Login</Link>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
