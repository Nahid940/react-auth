import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import AddressSave from "./components/AddressSave";
import AddressBook from "./components/address-book/AddressBook";
import { AuthProvider } from "./context";
import Edit from "./components/address-book/Edit";


const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);



  return (
    <div>
      
      <div className="container mt-3">
        <div className="my_nav">
            <ul>
              <li className="">
                <Link to={"/"} className="">
                  Home
                </Link>
              </li>
              <li className="">
                <Link to={"/save-address"} className="">
                  New Address
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="">
                  Sign Up
                </Link>
              </li>
            </ul>
        </div>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<AddressBook />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/save-address" element={<AddressSave />} />
            <Route exact path="/edit/:id" element={<Edit/>} />
          </Routes>
        </AuthProvider>
        
      </div>

    </div>
  );
};

export default App;