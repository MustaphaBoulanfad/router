import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <Fragment>
      <div className={styles.profileContainer}>
        <div className={styles.sideBar}>
          <nav>
            <li>
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="friends"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                List Of Friends
              </NavLink>
            </li>
            <li>
              <NavLink
                to="edit"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Edit
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                replace="true"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Logout
              </NavLink>
            </li>
          </nav>
        </div>
        <div className={styles.content}>{<Outlet />}</div>
      </div>
    </Fragment>
  );
};

export default Profile;
