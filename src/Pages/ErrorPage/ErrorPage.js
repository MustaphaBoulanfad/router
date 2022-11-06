import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <span>404</span>
      <h1> Not Found!</h1>
    </div>
  );
};

export default ErrorPage;
