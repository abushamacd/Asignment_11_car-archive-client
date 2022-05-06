import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import supplier1 from "../../../images/supplier/audi.png";
import supplier2 from "../../../images/supplier/bmw.png";
import supplier3 from "../../../images/supplier/lexus.png";
import supplier4 from "../../../images/supplier/Volkswagen.png";
import supplier5 from "../../../images/supplier/сhevrolet.png";

const Supplier = () => {
  return (
    <Container>
      <Row>
        <Col md={8} className="text-center mx-auto">
          <p className="text-muted m-0">Worldwide Supplier</p>
          <br />
          <hr className="w-25 mx-auto theme_color mt-0" />
          <h2 className="text-uppercase">
            {" "}
            <span className="theme_color">Our </span>
            <span>Favourite</span>
            <span className="theme_color"> Supplier </span>
          </h2>
          <hr className="w-25 mx-auto theme_color mb-0" />
        </Col>
      </Row>
      <Row xs={1} md={2} lg={5} className="g-4 my-5 align-items-center">
        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={supplier1} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={supplier2} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={supplier3} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={supplier4} />
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Img variant="top" src={supplier5} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Supplier;
