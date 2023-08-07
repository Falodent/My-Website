import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
    emailjs
      .send(
        "service_h5b94bp",
        "template_sei5srt",
        formDetails,
        "4otlfJkrG17pKdTXA"
      )
      .then((result) => {
        console.log("Sent", result.text);
        Swal.fire({
          icon: "success",
          title: "Thank you for your message!",
        });
        setLoading(true);
      })
      .catch((error) => {
        console.log("Error", error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, Something went wrong",
        });
        setLoading(true);
      });

    setFormDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="firstName"
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="lastName"
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="email"
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="phone"
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={handleChange}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={handleChange}
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{loading ? "Send" : "Sending..."}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
