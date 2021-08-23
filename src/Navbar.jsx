import React from "react";
import { NavLink } from "react-router-dom";
import userimg from "./img/user.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg fixed-top">
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand" to="/">
            That'sDesigns
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="link"
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="link"
                  className="nav-link"
                  to="/collections"
                >
                  COLLECTIONS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="link"
                  className="nav-link"
                  to="/ourstory"
                >
                  OUR STORY
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="link"
                  className="nav-link"
                  to="art"
                >
                  ART
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="link"
                  className="nav-link"
                  to="wholesale"
                >
                  WHOLESALE
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  <i class="fas fa-search"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <img src={userimg} alt=""></img>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
