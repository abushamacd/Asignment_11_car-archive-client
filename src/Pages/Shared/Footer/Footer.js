import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  // Generate dynamic date
  const date = new Date().getFullYear();
  return (
    <Container>
      <Row className="py-3">
        <Col md={6}>
          <p className=" mb-0">
            Copyright @ {date}. All rights reserved{" "}
            <Link className="text-decoration-none theme_color" to={"/"}>
              Car Archive
            </Link>{" "}
          </p>
        </Col>
        <Col md={6} className="footer_menu">
          <ul className="">
            <li className="theme_color_hover float-end mx-3">Privacy Policy</li>
            <li className="theme_color_hover float-end mx-3">
              Terms and Conditions
            </li>
            <li className="theme_color_hover float-end mx-3">Contact Us</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
