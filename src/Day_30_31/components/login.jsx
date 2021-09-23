import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../actions";
import { userInfo } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <div className="login">
      <div>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            if (password && email) {
              setEmail("");
              setPassword("");
              redirect();
              dispatch(login());
              dispatch(userInfo({ name: email, password: password }));
            }
          }}
        >
          Submit
        </button>
        <p className="forgot-password">
          <p>Forgot Password</p>
        </p>
        <Link to="/signup">
          <p className="text-left">SignUp</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
