import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import vk from "../assets/vk.png";
import ok from "../assets/ok.png";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <Container>
        <Row className="gy-3">
          <Col md={4}>
            <h3 className="text-white">Конференции.РФ</h3>
            <p className="fst-italic small mb-0">
              Бронирование помещений для Всероссийских конференций
            </p>
          </Col>

          <Col md={4}>
            <h3 className="text-white">Разделы</h3>
            <ul className="list-unstyled mb-0">
              <li>
                <Link className="text-white" to="/profile">
                  Профиль
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/auth">
                  Вход
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/">
                  Регистрация
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h3 className="text-white">Мы в соцсетях</h3>
            <div className="d-flex gap-3">
              <a href="https://vk.com" target="_blank" rel="noreferrer">
                <img
                  src={vk}
                  alt="ВКонтакте"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </a>
              <a href="https://ok.ru" target="_blank" rel="noreferrer">
                <img
                  src={ok}
                  alt="Одноклассники"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </a>
            </div>
          </Col>
        </Row>

        <hr />
        <p className="text-center fst-italic small mb-0">
          © 2027 Конференции.РФ. Все права защищены.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
