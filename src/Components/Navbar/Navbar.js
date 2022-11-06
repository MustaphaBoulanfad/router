import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <span>Logo</span>
        <nav>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Contact
            </NavLink>
          </li>
        </nav>
        <button
          onClick={() => navigate("/profile")}
          className={styles.profileBtn}
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
