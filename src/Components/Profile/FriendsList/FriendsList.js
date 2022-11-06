import React from "react";
import { Link } from "react-router-dom";
import styles from "./FriendsList.module.css";

const FriendsList = () => {
  return (
    <div className={styles.friendsContainer}>
      <h1>List of Friends : </h1>
      <ul>
        <li>
          <Link to="1">Friend One</Link>
        </li>
        <li>
          <Link to="2">Friend Two</Link>
        </li>
        <li>
          <Link to="3">Friend Three</Link>
        </li>
        <li>
          <Link to="4">Friend Four</Link>
        </li>
      </ul>
    </div>
  );
};

export default FriendsList;
