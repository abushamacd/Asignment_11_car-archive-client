import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter py-5">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={6}>
            <h4 className="theme_color text-uppercase">
              Subscribe to our newsletter feed
            </h4>
            <small className="text-white">
              Put your email for get update about offer, news, conferance
            </small>
          </Col>
          <Col md={6}>
            <div className="d-flex">
              <input
                className="form-control rounded-0 theme_border"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <Button className="rounded-0" variant="themeButton">
                Subscribe
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
