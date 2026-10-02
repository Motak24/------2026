import React from "react";
import { Nav } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <h1 className="p-3 m-3">Личный кабинет</h1>

      <Nav className="flex-column">
        <Nav.Link href="/reg">Уже зарегистрированы? Войти</Nav.Link>
        <Nav.Link href="/auth">
          Ещё не зарегистрированы? Создать аккаунт
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Profile;
