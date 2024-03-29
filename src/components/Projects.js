import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Education from "./Education";

export const Projects = () => {
  const projects = [
    {
      title: "Conclase Technologies Official Website",
      description: "Full Development",
      imgUrl: projImg1,
      link: "https://conclaseint.com",
    },
    {
      title: "Foomigeit: Pest Termination to Perfection",
      description: "Full Development",
      imgUrl: projImg2,
      link: "https://foomigeit.com/",
    },
    {
      title: "Sota Investment Limited Website",
      description: "Full Development",
      imgUrl: projImg3,
      link: "https://sotainvestmentltd.com/",
    },
    {
      title: "Limestone: Your Property Management Solution",
      description: "Team Development",
      imgUrl: projImg4,
      link: "https://limestone.ng/",
    },
    {
      title: "Twelfstach: Home of Stories",
      description: "Team Development",
      imgUrl: projImg5,
      link: "https://twelfstack.com/",
    },
    {
      title: "Caleb University Medical Center System",
      description: "Full Development",
      imgUrl: projImg6,
      link: "https://calebmc.netlify.app/",
    },
  ];

  const experiences = [
    {
      school: "CONCLASE CONSULTING & TECHNOLOGIES",
      degree: "Role : Front-End Developer",
      year: "Time Period : May 2022 - Present",
    },
    {
      school: "TWELFSTACK",
      degree: "Role : Lead Front-End Developer (Contract)",
      year: "Time Period : January 2023 - April 2023",
    },
    {
      school: "MONOCHROME TECHNOLOGIES",
      degree: "Role : Front-End Developer",
      year: "Time Period : February 2021 - May 2022",
    },
    {
      school: "TELEMATICS SYSTEMS LIMITED",
      degree: "Role : Front-End Developer",
      year: "Time Period : March 2020 - April 2021",
    },
  ];

  const education = [
    {
      school: "Caleb University Imota",
      degree: "Certfication : Bachelor of Science in Computer Science",
      year: "Time Period : 2020 - 2023",
    },
    {
      school: "Google Certificates",
      degree: "Certification : Crash Course on Python",
      year: "Time Period : 2022",
    },
    {
      school: "IBM Certificates",
      degree: "Certification : Introduction to Cloud Computing",
      year: "Time Period : 2021",
    },
    {
      school: "University of Lagos School of Foundation Studies",
      degree:
        "Certification : General Certificate Of Education Advanced Level (JUPEB)",
      year: "Time Period : 2019 - 2020",
    },
  ];

  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Me</h2>
                  <p>
                    Check out some of the projects I've worked on, my past work
                    experiences and my education & certifications.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          style={{ cursor: "pointer" }}
                        >
                          Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          style={{ cursor: "pointer" }}
                        >
                          Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          style={{ cursor: "pointer" }}
                        >
                          Education
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {/* <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={projImg5} alt="view" />
                              <div className="proj-txtx">
                                <h4>Fixit: Connect With A Craft Man</h4>
                                <span>Still in Development</span>
                              </div>
                            </div>
                          </Col> */}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="education">
                          {experiences.map((experience, index) => {
                            return <Education key={index} {...experience} />;
                          })}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="education">
                          {education.map((edu, index) => {
                            return <Education key={index} {...edu} />;
                          })}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="back"
      ></img>
    </section>
  );
};
