import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

    if (data.user) {
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      navigate("/profile");
    } else {
      setError(data.message);
    }
  }

  const handleLogin = (value) => setLogin(value);
  const handlePassword = (value) => setPassword(value);

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-75 rounded-5 w-25 p-3"
    >
      <h1 className="p-3 m-3 text-center">Авторизация</h1>

      {error && (
        <Alert variant="danger" className="mx-3  rounded-5">
          {error}
        </Alert>
      )}

      <Form.Group className="p-3 m-3">
        <Form.Label>Логин</Form.Label>
        <Form.Control
          className="rounded-5"
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
          className="rounded-5"
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
        <Button variant="primary" type="submit" size="lg" className="rounded-5">
          Авторизоваться
        </Button>

        <Nav className="flex-column p-3 small">
          <Nav.Link href="/">Ещё не зарегистрированы? Создать аккаунт</Nav.Link>
        </Nav>
      </div>
    </Form>
  );
}

export default Auth;
