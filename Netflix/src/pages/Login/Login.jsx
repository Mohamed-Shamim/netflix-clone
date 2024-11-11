import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [signStatus, setSignStatus] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (signStatus === "Sign In") {
      await login(email, password);
    } else {
      await signup( name, email, password);
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signStatus} to Netflix</h1>
        <form action="">
          {signStatus === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Full Name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signStatus}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="privacy-policy">
              {signStatus === "Sign In" ? (
                <a href="">Forgot Password?</a>
              ) : (
                <a href="">Privacy Policy</a>
              )}
            </div>
          </div>
        </form>
        <div className="form-switch">
          {signStatus === "Sign In" ? (
            <p>
              New to Netflix{" "}
              <span
                onClick={() => {
                  setSignStatus("Sign Up");
                }}
              >
                Sing Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have a account{" "}
              <span
                onClick={() => {
                  setSignStatus("Sign In");
                }}
              >
                Sing In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
