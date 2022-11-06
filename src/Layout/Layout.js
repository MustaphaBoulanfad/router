import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
