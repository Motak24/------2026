import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataForm = {
      login,
      password,
    };

    const response = await fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });

    const data = await response.json();
    alert(data.message);

    if (data.user) {
      localStorage.setItem("currentUser", JSON.stringify(data));
      navigate("/");
    }
  };

  const handleLogin = (value) => setLogin(value);
  const handlePassword = (value) => setPassword(value);

  return (
    <Form className="p-3 m-3" onSubmit={handleSubmit}>
      <h1 className="p-3 m-3">Авторизация</h1>
      <Form.Group className="p-3 m-3">
        <Form.Label>Логин</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите логин"
          minLength={6}
          title="латиница и цифры, не менее 6 символов"
          pattern="[a-zA-Z0-9]{6,}"
          value={login}
          onChange={(e) => handleLogin(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="p-3 m-3">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          title="пароль минимум 8 символов"
          minLength={8}
          placeholder="Пароль"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          required
        />
      </Form.Group>

      <div className="text-center p-3">
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </div>

      <Nav className="flex-column">
        <Nav.Link href="/reg">
          Ещё не зарегистрированы? Создать аккаунт
        </Nav.Link>
      </Nav>
    </Form>
  );
}

export default Auth;
