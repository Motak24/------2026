import bodyParser from "body-parser";
import cors from "cors";
import { connection } from "./connectDB.js";

import express from "express";
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);
  const { login, password, fio, phone, email } = req.body;

  connection.query(
    "INSERT INTO user(login, password, fio, phone, email) VALUES (?, ?, ?, ?, ?)",
    [login, password, fio, phone, email],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "Логин занят!" });
      }

      console.log("Пользователь добавлен!");
      res
        .status(200)
        .json({ user: true, message: "Регистрация прошла успешна!" });
    },
  );
});

app.post("/auth", (req, res) => {
  console.log(req.body);
  const { login, password } = req.body;

  connection.query(
    "SELECT * FROM user WHERE (login, password) = (?, ?)",
    [login, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ message: "Ошибка БД!" });
      }

      if (result.length === 0) {
        return res.json({ message: "Пользователь не найден!" });
      }

      console.log("Пользователь найден!");
      res.json({
        user: result[0],
        message: "Авторизация прошла успешна!",
      });
    },
  );
});

app.get("/applications", (req, res) => {
  connection.query(`select * from booking`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ message: `Ошибка БД` });
    }

    console.log("Заявки найдены!");
    return res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
