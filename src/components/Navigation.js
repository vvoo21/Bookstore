import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Navigation = () => (
  <nav className="nav-bar">
    <a href="#/" className="nav-logo">Bookstore CMS</a>
    <ul className="nav-links">
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Categories"
          className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
        >
          Categories
        </NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons">
        person
      </span>
    </button>
  </nav>
);

export default Navigation;
