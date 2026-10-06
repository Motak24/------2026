import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Profile() {
  const [applications, setApplications] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const func = async () => {
      const responce = await fetch("http://localhost:3000/applications");
      const data = await responce.json();
      console.log(data);
      setApplications(data);

      console.log(applications);
    };
    func();
  }, []);

  return (
    <Container className="d-flex flex-wrap gap-3 p-3">
      <div>
        <h1>Ваши заявки</h1>
      </div>

      <div className="d-flex flex-wrap gap-3 p-3">
        {applications.map(
          (el) =>
            currentUser.id_user == el.id_user && (
              <Card style={{ width: "18rem" }} key={el.id_b}>
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
    </Container>
  );
}

export default Profile;
