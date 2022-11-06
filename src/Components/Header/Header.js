import React, { Fragment } from "react";
import styles from "./header.module.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <Fragment>
      <Navbar />
      <header>
        <h1>Header</h1>
      </header>
    </Fragment>
  );
};

export default Header;
