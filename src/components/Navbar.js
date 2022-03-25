import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
        <nav className="navBar">
          <h3>Bookstore CMS</h3>
          <div className="navItems">
            <ul className="navMenu">
              <li><NavLink className="booksLink" to="/">Books</NavLink></li>
              <li><NavLink className="categoriesLink" to="/categories">Categories </NavLink></li>
            </ul>
          </div>
        </nav>
    );
  }
}