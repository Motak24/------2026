import { Route, Routes, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";

import Registration from "./Components/Registration";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";
import СreateApplication from "./Components/СreateApplication"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar expand="md" bg="dark" data-bs-theme="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/profile"
            className="d-flex align-items-center gap-2 fs-4 fw-bold"
          >
            <img
              src={logo}
              alt=""
              width={40}
              height={40}
              className="rounded-circle"
            />
            Конференции.РФ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu" />
          <Navbar.Collapse id="menu" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/profile" className="text-white">
                Профиль
              </Nav.Link>
              <Nav.Link as={Link} to="/auth" className="text-white">
                Вход
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="text-white">
                Регистрация
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <img
        src={hero}
        alt=""
        className="w-100 d-block object-fit-cover"
        style={{ height: "240px", objectPosition: "center 70%" }}
      />

      <main className="d-flex flex-column align-items-center flex-grow-1 py-5 px-2">
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create" element={<СreateApplication />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
