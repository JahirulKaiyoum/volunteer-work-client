import React, { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Logo from '../../images/Logo.png'

import "./Header.css";

const Header = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 logo">
          <img src={Logo} className="img-fluid"></img>
        </div>
        <div className="col-md-10 menu">
          <nav>
            <ul>
              <li>
                <input type="text" className="srch-box"></input>
              </li>

              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Donation</Link>
              </li>
              <li>
                <Link to="/activities">Events</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">
                  <Button>Register</Button>
                </Link>
              </li>
              <li>
                <Link to="/admin">
                  <Button>Admin</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
