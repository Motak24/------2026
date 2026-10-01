import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [fio, setFIO] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataForm = {
      login,
      password,
      fio,
      email,
      phone
    };

  await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( dataForm ),
    });

    // const navigate = useNavigate();
  };

  const handleLogin = (value) => setLogin(value);
  const handlePassword = (value) => setPassword(value);
  const handleFIO = (value) => setFIO(value);
  const handleEmail = (value) => setEmail(value);
  const handlePhone = (value) => setPhone(value);

  return (
    <Form className="p-3 m-3" onSubmit={handleSubmit}>
      <Form.Group className="p-3">
        <h1>Регистрация</h1>
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

      <Form.Group controlId="formBasicPassword" className="p-3">
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

      <Form.Group className="p-3">
        <Form.Label>ФИО</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите ФИО"
          title="Символы кириллицы и пробелы"
          pattern="[а-яА-ЯёЁ\s]+"
          value={fio}
          onChange={(e) => handleFIO(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="p-3">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите номер телефона"
          maxLength={15}
          minLength={15}
          title="формат: 8(XXX)XXX-XX-XX"
          pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
          value={phone}
          onChange={(e) => handlePhone(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail" className="p-3">
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Создать пользователя
      </Button>
    </Form>
  );
}

export default Registration;
