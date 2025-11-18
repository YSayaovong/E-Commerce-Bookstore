import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__brand">
          <div className="brand__logo">📚</div>
          <span className="brand__name">BookStack</span>
        </div>

        <ul className="nav__links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")
              }
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")
              }
            >
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "nav__link" + (isActive ? " nav__link--active" : "")
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav__actions">
          <button className="btn__icon">
            🛒 <span className="cart__count">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
