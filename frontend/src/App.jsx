import { Route, Routes, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";
import group from "./assets/group 5.png";

import Registration from "./Components/Registration";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";
import СreateApplication from "./Components/СreateApplication";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top" className="px-5">
        <Navbar.Brand as={Link} to="/profile">
          <img src={logo} alt="" width={40} height={40} /> Конференции.РФ™
        </Navbar.Brand>

        <Nav className="ms-auto">
          {/* <Nav.Link as={Link} to="/profile">
            Профиль
          </Nav.Link> */}
          <Nav.Link as={Link} to="/auth">
            Вход
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Регистрация
          </Nav.Link>
        </Nav>
      </Navbar>

      <main className="d-flex flex-column align-items-center py-5">
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          {/* <Route path="/profile" element={<Profile />}></Route> */}
          <Route path="/create" element={<СreateApplication />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
