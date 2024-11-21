import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // For styling (optional)

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className="navbar-link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/chats" className="navbar-link" activeClassName="active">
            Chats
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/community" className="navbar-link" activeClassName="active">
            Community
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/jobs-available" className="navbar-link" activeClassName="active">
            Jobs Available
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
