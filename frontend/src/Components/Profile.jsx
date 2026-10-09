import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Profile() {
  const [applications, setApplications] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  console.log("CURRENT USER:", currentUser);
  console.log("APPLICATIONS:", applications);

  useEffect(() => {
    const func = async () => {
      const responce = await fetch("http://localhost:3000/applications");
      const data = await responce.json();
      console.log(data);

      console.log("DATA FROM SERVER:", data);

      setApplications(data);

      console.log(applications);
    };

    func();
  }, []);

  return (
    <Container>
      <div>
        <h1 className="text-center p-3 m-3 text-bg-light rounded-5 bg-white bg-opacity-75">Ваши текущие заявки</h1>
        <hr />
      </div>

      <div className="d-flex flex-wrap gap-3 p-3">
        {applications.map(
          (el) =>
            currentUser.id_user == el.id_user && (
              <Card style={{ width: "18rem" }} key={el.id_b} className="bg-white bg-opacity-75 rounded-4">
                <Card.Body>
                  <Card.Title>{el.room}</Card.Title>

                  <Card.Text>
                    Дата начала:{" "}
                    {new Date(el.date_b).toLocaleString("ru-RU").slice(0, 10)}
                  </Card.Text>

                  <Card.Text>Способ оплаты: {el.payment_method}</Card.Text>
                </Card.Body>
              </Card>
            ),
        )}
      </div>
      <hr />

      <div className="text-center p-3">
        <h1 className="text-center p-3 m-3 text-bg-light rounded-5 bg-white bg-opacity-75">Нужно что-то ещё?</h1>
        <Button variant="primary" type="submit" size="lg" className="rounded-5">
          Подать новую заявку
        </Button>
      </div>
    </Container>
  );
}

export default Profile;
