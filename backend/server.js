import express from "express";
import { connection } from "./connectDB.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/reg", (req, res) => {
  console.log(req.body);

  const { login, password, fio, email, phone } = req.body;

  connection.query(
    `INSERT INTO user(login, password, fio, email, phone) VALUES (?, ?, ?, ?, ?)`,
    [login, password, fio, email, phone],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: "Логин занят" });
      }

      console.log("данные добавлены");

      res.status(200).json({
        user: true,
        message: "Регистрация успешна",
      });
    },
  );
});

app.post("/auth", (req, res) => {
  console.log(req.body);

  const { login, password } = req.body;

  connection.query(
    `SELECT * FROM user WHERE (login, password) = (?, ?)`,
    [login, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ message: "Ошибка БД" });
      }

      if (result.length === 0) {
        return res.json({ user: false, message: "Пользователь не найден!" });
      }

      console.log("пользователь найден");
      res.json({
        user: true,
        data: result[0],
        message: "Вы успешно авторизовались",
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
