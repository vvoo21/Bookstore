import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <p className="logo">Bookstore CMS</p>
    <ul>
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
  </nav>
);

export default Navigation;
