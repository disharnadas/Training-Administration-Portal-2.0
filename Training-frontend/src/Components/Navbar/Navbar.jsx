import React, { Component } from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "./logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
        <a href="/" class="navbar-brand">
      
      <img src= {logo} width="66" alt="" class="d-inline-block align-middle mr-2"></img>
      
     
      
    </a>
          <span class="navbar-brand border-none" >
            Training Administration Portal
          </span>
          
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="nav navbar-nav navbar-right">
              {/* <li class="nav-item active">
                <Link class="nav-link" to="#">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li> */}
              <li class="nav-item">
                <NavLink
                  className="nav-link btn btn-login button-outline-none"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link btn btn-register button-outline-none"
                  to="/register"
                >
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
