import express from "express";
import { connection } from "./connectDB.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);

  const { login, password, fio, email, phone} = req.body;
  console.log(login);

  connection.query(
    `INSERT INTO user(login, password, fio, email, phone) VALUES (?, ?, ?, ?, ?)`,
    [login, password, fio, email, phone],
    (err, rows) => {
      if (err) return res.json({ message: "Логин занят" });

      console.log("данные добавлены ");
    },
  );

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
