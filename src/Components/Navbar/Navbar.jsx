import React from "react";
import "./Navbar.css";
import pokemon_logo from "../../assets/pokemon_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img className="nav-logo-img" src={pokemon_logo} alt="" />
        </div>
        <div className="nav-menu">
          <ul className="nav-list">
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/browse" className="nav-item">
              Browse
            </Link>
            <Link to="/trivia" className="nav-item">
              Trivia
            </Link>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
