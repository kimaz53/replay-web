import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const history = useHistory();

  const dashPage = () => {
    history.push("/dashboard");
    window.location.reload(true);
  };

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="App">
        <div className="auth-form-container">
          <div className="header-container"></div>

          <div className="login-form-container">
            <div className="login-header">
              <label className="login-header-title">LOGIN FORM</label>
            </div>

            <form
              className="login-form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="input-user-container">
                <div className="label-container">
                  <label className="label-style" htmlFor="username">
                    Username
                  </label>
                </div>
                <div className="input-user-field">
                  <input
                    className="input-user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    type="username"
                    placeholder="Enter username"
                    name="username"
                  />
                </div>
              </div>

              <div className="input-pass-container">
                <div className="label-container">
                  <label className="label-style" htmlFor="password">
                    Password
                  </label>
                </div>
                <input
                  className="input-pass"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Enter password"
                  name="password"
                />
              </div>

              <button className="login-button" onClick={dashPage}>
                <div className="login-button-container">
                  <label className="login-button-text">LOGIN</label>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
