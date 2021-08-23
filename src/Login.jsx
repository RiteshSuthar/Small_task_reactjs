import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [curtext, nexttext] = useState({
    name: "",
    password: "",
  });

  const type = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    nexttext((allitems) => {
      return {
        ...allitems,
        [name]: value,
      };
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
  };
  const onsubmit = () => {
    alert(
      `My Email is : ${curtext.name} And my Password is : ${curtext.password}`
    );
  };

  return (
    <>
      <div className="login_back">
        <div className="login_panel col-lg-3">
          <div className="heading">
            <h1>That'sDesigns.</h1>
          </div>
          <form onSubmit={onSubmits}>
            <h2>Wholesale Login</h2>
            <div className="mt-5">
              <label className="mb-2">EMAIL</label>
              <input
                type="text"
                placeholder="you@your-company.com"
                className="form-control"
                onChange={type}
                value={curtext.name}
                name="name"
              ></input>
            </div>
            <div className="mt-4">
              <label className="mb-2">PASSWORD</label>
              <input
                type="password"
                className="form-control"
                onChange={type}
                value={curtext.password}
                name="password"
              ></input>
            </div>
            <NavLink to="/">FORGOT PASSWORD?</NavLink>
            <div className="mt-5 text-center">
              <button onClick={onsubmit}>Let's go</button>
            </div>
            <h5 className="mt-4 text-center">Not a Wholesale Partner?</h5>
            <div className="row btns">
              <div className=" col-md-6 col-sm-6 col-6 mt-3">
                <button>
                  <NavLink className="nav-link" exact to="/">
                    Keep browsing
                  </NavLink>
                </button>
              </div>
              <div className=" col-md-6 col-sm-6 col-6 mt-3 text-end">
                <button>
                  <NavLink className="nav-link" exact to="/login/register">
                    Apply here
                  </NavLink>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
