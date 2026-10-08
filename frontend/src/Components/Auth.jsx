import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const dataForm = { login, password };

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
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      navigate("/profile");
    }
  }

  const handleLogin = (value) => setLogin(value);
  const handlePassword = (value) => setPassword(value);

  return (
    <Form onSubmit={handleSubmit} className="form-card">
      <h1 className="p-3 m-3">Авторизация</h1>
      <Form.Group className="p-3 m-3">
        <Form.Label>Логин</Form.Label>
        <Form.Control
          type="text"
          placeholder="Логин"
          title="латиница и цифры, не менее 6 символов"
          pattern="[a-zA-Z0-9]{6,}"
          minLength={6}
          value={login}
          onChange={(e) => handleLogin(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="p-3 m-3">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          placeholder="Пароль"
          title="минимум 8 символов"
          minLength={8}
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          required
        />
      </Form.Group>

      <div className="text-center">
        <Button variant="primary" type="submit" size="lg">
          Авторизоваться
        </Button>

        <Nav className="flex-column p-3">
          <Nav.Link href="/">Ещё не зарегистрированы? Создать аккаунт</Nav.Link>
        </Nav>
      </div>
    </Form>
  );
}

export default Auth;
