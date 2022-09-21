import { Container, Row, Col } from "react-bootstrap";
import {Motto} from "./Motto"
import logo from "../assets/img/Falo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Motto />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <p>Email: falodave11@gmail.com</p>
            <p>Mobile: +234-705-369-9331</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/olamide-falola-44731823b/" rel="noreferrer" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Falodent" rel="noreferrer" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.behance.net/olamidefalola" rel="noreferrer" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
