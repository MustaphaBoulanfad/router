import React from "react";
import { useParams } from "react-router-dom";
import styles from "./FriendDetails.module.css";

const FriendDetails = () => {
  const { userId } = useParams();
  return (
    <div className={styles.detailsContainer}>
      <h3>
        ID : <span>{userId}</span>
      </h3>
      <p>
        Name : <span>The Name</span>
      </p>
      <p>
        Country : <span>The Country</span>
      </p>
      <p>
        Age : <span>The Age</span>
      </p>
    </div>
  );
};

export default FriendDetails;
