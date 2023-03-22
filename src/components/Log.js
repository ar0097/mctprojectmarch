import React from "react";
import { useState } from "react";
import "../styles.css";

import { Link } from "react-router-dom";

const Log = () => {
  const [pass, setPass] = useState("");
  const [eml, setEml] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  let password = "12345678";
  let email = "arbazshah7454@gmail.com";
  const Evaluation = () => {
    if (password === pass && email === eml) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  return (
    <div className="login">
      <div className="loginform_container">
        <h1>Welcome back to Pretty Login</h1>
        <p>It's great to have you back!</p>
        <form className="login_form">
          <label>EMAIL</label>
          <input
            onChange={(e) => {
              setEml(e.target.value);
            }}
            className="email"
            type={"email"}
          />
          <label>PASSWORD</label>
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="password"
            type={"password"}
          />
          <div className="rememberme">
            <div>
              <input type={"checkbox"} className="check_box" />
              <label>Remember me?</label>
            </div>

            <p>Forget password?</p>
          </div>
          <div className="login-part">
            {isCorrect ? (
              <Link
                to="/Home"
                onClick={Evaluation}
                className="login-button"
                type="submit"
              >
                LOGIN
              </Link>
            ) : (
              <div>{alert("eneter valid details")}</div>
            )}

            <button className="createaccount-button">CREATE ACCOUNT</button>
          </div>
          <p className="login-with">Or login with</p>
          <p className="facebook">Facebook Google</p>
        </form>
      </div>
      <div className="image_part">
        <img
          className="imag"
          alt="pic"
          src="https://images.pexels.com/photos/3663482/pexels-photo-3663482.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default Log;
