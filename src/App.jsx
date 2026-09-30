import React from "react";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Registration from "./Components/Registration";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>ДЭМО. ПОРТАЛ "Корочки.есть"</h1>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
