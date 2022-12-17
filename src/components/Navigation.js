import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Navigation = () => (
  <nav className="nav-bar">
    <h1 className="nav-logo">Bookstore CMS</h1>
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
