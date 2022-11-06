import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Profile from "../Components/Profile/Profile";
import ProfilePage from "../Components/Profile/ProfilePage/ProfilePage";
import EditProfile from "../Components/Profile/EditProfile/EditProfile";
import FriendsList from "../Components/Profile/FriendsList/FriendsList";
import FriendDetails from "../Components/Profile/FriendsList/FriendDetails/FriendDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route index element={<ProfilePage />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="friends" element={<FriendsList />} />

          <Route path="friends/:id" element={<FriendDetails />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
