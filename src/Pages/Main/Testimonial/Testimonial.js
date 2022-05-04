import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import testi_bg from "../../../images/testimonials.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section
      style={{ backgroundImage: `url(${testi_bg})` }}
      className="testimonials py-5 position-relative"
    >
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={6}>
            <h4 className="theme_color text-uppercase">
              Subscribe to our newsletter feed
            </h4>
            <small>
              Simply Dummy Text of the Printin Galley of Type and Bled it to
              Make a Type.
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
                Update
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
