import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Loading = () => {
  return (
    // Show the spiner on loading
    <Container>
      <Row>
        <Col md={12} className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
