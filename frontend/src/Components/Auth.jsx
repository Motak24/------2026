import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataForm = {
      login,
      password,
    };

    const response = new fetch("http://localhost5173/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dataForm }),
    });

    const navigate = useNavigate();
  };

  const handleLogin = (value) => setLogin(value);
  const handlePassword = (value) => setPassword(value);

  return (
    <Form className="p-3 m-3">
    <h1>Авторизация</h1>
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

      <Button variant="primary" type="submit" onSubmit={handleSubmit}>
        Войти
      </Button>
    </Form>
  );
}

export default Auth;
