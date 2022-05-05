import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import notfound from "../../../images/404.jpg";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col lg={8} className="mx-auto">
          <h2 className="text-center my-3">Page Not Found</h2>
          <p className="theme_color text-center">
            Your search link is not found
          </p>
          <img className="img-fluid" src={notfound} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
