import React from "react";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Registration from "./Components/Registration";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>ДЭМО ЭКЗАМЕН</h1>
      <Routes>
        <Route path="/reg" element={<Registration />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
