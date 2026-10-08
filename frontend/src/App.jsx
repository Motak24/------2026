import React from "react";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg"
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Registration from "./Components/Registration";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";

function App() {
  // const navigate = useNavigate();

  return (
    <div className="min-vh-100">
      <header className="site-header sticky-top py-2 px-3 d-flex justify-content-between align-items-center">
        <Link to="/profile" className="brand">
          <img src={logo} alt="Логотип" />
          Конференции.РФ
        </Link>
        <nav className="d-flex gap-3">
          <Link className="nav-link" to="/profile">
            Заявки
          </Link>
          <Link className="nav-link" to="/auth">
            Вход
          </Link>
          <Link className="nav-link" to="/">
            Регистрация
          </Link>
        </nav>
      </header>
      <img className="hero" src={hero} alt="" />
      <main className="d-flex flex-column align-items-center py-4 px-2">
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
