import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/Prod">
        Product
      </Link>
      <Link className="link" to="/User">
        Users
      </Link>
      <Link className="link" to="/Contact">
        Contact
      </Link>
      <Link className="link" to="/">
        Log Out
      </Link>
    </div>
  );
};

export default Navbar;
