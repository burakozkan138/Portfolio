import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qa from "../../Assets/Projects/qa.png";
import cb from "../../Assets/Projects/cb.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Geliştirdiğim <strong className="purple">Projeler </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qa}
              isBlog={false}
              title="Question Answer Api"
              description="Sorular oluşturabileceğiniz ve cevaplarını ekleyebileceğiniz bir rest api. 
              Golang üzerinde geliştirildi. İçerisinde JWT ile authentication ve authorization işlemleri bulunmaktadır. 
              Database olarak PostgreSQL kullanılmıştır.
              Kolaylık sağlaması için Swagger dökümantasyonu oluşturdum ayrıca Dockerize ederek kolayca çalıştırılabilir hale getirdim."

              ghLink="https://github.com/burakozkan138/questionanswerapi"
              demoLink="https://qclient.burakozkan.live/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cb}
              isBlog={false}
              title="Cinema Booking System"
              description="Sinema salonlarının film ve seans bilgilerini tutarak bilet satışını sağlayan bir api.
              Java Spring Boot üzerinde geliştirildi. İçerisinde JWT ile authentication ve authorization işlemleri bulunmaktadır.
              Database olarak Mongodb kullandım.
              Kolaylık sağlaması için Swagger dökümantasyonu oluşturdum ayrıca Dockerize ederek kolayca çalıştırılabilir hale getirdim."
              ghLink="https://github.com/burakozkan138/cinemabookingsystem"
              demoLink="https://capi.burakozkan.live/api/v1/swagger-ui/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
