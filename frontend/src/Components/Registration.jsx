import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [fio, setFIO] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const dataForm = { login, password, fio, phone, email };

    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });

    const data = await response.json();

    if (response.status === 200) {
      setError("");
      setSuccess(data.message);
      navigate("/auth");
    } else {
      setSuccess("");
      setError(data.message);
    }
  }

  const handleLogin = (value) => setLogin(value);
  const handlePassword = (value) => setPassword(value);
  const handleFIO = (value) => setFIO(value);
  const handlePhone = (value) => setPhone(value);
  const handleEmail = (value) => setEmail(value);

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-75 rounded-5 w-25 p-3"
    >
      <h1 className="p-3 m-3 text-center">Регистрация</h1>

      {error && (
        <Alert variant="danger" className="mx-3 rounded-5">
          {error}
        </Alert>
      )}
      {success && (
        <Alert variant="success" className="mx-3 rounded-5">
          {success}
        </Alert>
      )}

      <Form.Group className="p-3">
        <Form.Label>Логин</Form.Label>
        <Form.Control
          className="rounded-5"
          type="text"
          placeholder="Введите логин"
          title="латиница и цифры, не менее 6 символов"
          pattern="[a-zA-Z0-9]{6,}"
          minLength={6}
          value={login}
          onChange={(e) => handleLogin(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="p-3">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          className="rounded-5"
          type="password"
          placeholder="Введите пароль"
          title="минимум 8 символов"
          minLength={8}
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="p-3">
        <Form.Label>ФИО</Form.Label>
        <Form.Control
          className="rounded-5"
          type="text"
          placeholder="Введите ФИО"
          title="символы кириллицы и пробелы"
          pattern="[а-яА-ЯёЁ0-9\s]+"
          value={fio}
          onChange={(e) => handleFIO(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="p-3">
        <Form.Label>Телефон</Form.Label>
        <Form.Control
          className="rounded-5"
          type="text"
          placeholder="Введите номер телефона"
          title="формат: 8(XXX)XXX-XX-XX"
          pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
          minLength={15}
          maxLength={15}
          value={phone}
          onChange={(e) => handlePhone(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail" className="p-3">
        <Form.Label>Почта</Form.Label>
        <Form.Control
          className="rounded-5"
          type="email"
          placeholder="Введите адрес электронной почты"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
          required
        />
      </Form.Group>

      <div className="text-center m-3">
        <Button variant="primary" type="submit" size="lg rounded-5">
          Создать пользователя
        </Button>

        <Nav className="flex-column p-3 small">
          <Nav.Link href="/auth">
            Уже зарегистрированы? Войти в аккаунт
          </Nav.Link>
        </Nav>
      </div>
    </Form>
  );
}

export default Registration;
