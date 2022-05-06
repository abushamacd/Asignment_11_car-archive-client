import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import about from "../../../images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCab,
  faCommentDots,
  faDollarSign,
  faVault,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={8} className="text-center mx-auto">
          <p className="text-muted m-0">Welcome to</p>
          <br />
          <hr className="w-25 mx-auto theme_color mt-0" />
          <h2 className="text-uppercase">
            {" "}
            <span className="theme_color">Car </span>
            <span>Archive</span>
          </h2>
          <hr className="w-25 mx-auto theme_color" />
          <p>
            We bring you new markets, new customers and new opportunities for
            the purchase and sale of used cars. Now you can buy and sell a used
            car safely and comfortablly online, with only a few easy clicks.
          </p>
        </Col>
      </Row>
      <Row className="my-5 align-items-center">
        <Col md={6}>
          <img className="img-fluid" src={about} alt="" />
        </Col>
        <Col md={6}>
          <p>
            A car is a wheeled motor vehicle used for transportation. Most
            definitions of cars say that they run primarily on roads, seat one
            to eight people, have four wheels, and mainly transport people
            rather than goods.
          </p>
          <p>
            Cars came into global use during the 20th century, and developed
            economies depend on them. The year 1886 is regarded as the birth
            year of the car when German inventor Carl Benz patented his Benz
            Patent-Motorwagen. Cars became widely available in the early 20th
            century. One of the first cars accessible to the masses was the 1908
            Model T, an American car manufactured by the Ford Motor Company.
            Cars were rapidly adopted in the US, where they replaced
            animal-drawn carriages and carts.[6] In Europe and other parts of
            the world, demand for automobiles did not increase until after World
            War II.
          </p>
        </Col>
      </Row>
      {/* Show services */}
      <Row xs={1} md={2} lg={4} className="g-4 mb-5">
        <Col>
          <Card className="text-center border-0">
            <FontAwesomeIcon
              width={100}
              className="fs-2 py-4 theme_border theme_color_hover rounded-circle mx-auto mt-3"
              icon={faCab}
            />
            <Card.Body>
              <Card.Title className="fs-6">ALL BRANDS</Card.Title>
              <hr className="w-25 mx-auto theme_color" />
              <Card.Text className="text-muted">
                More than 20 brands car we are stock
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center border-0">
            <FontAwesomeIcon
              width={100}
              className="fs-2 py-4 theme_border theme_color_hover rounded-circle mx-auto mt-3"
              icon={faCommentDots}
            />
            <Card.Body>
              <Card.Title className="fs-6">FREE SUPPORT</Card.Title>
              <hr className="w-25 mx-auto theme_color" />
              <Card.Text className="text-muted">
                24/7 premium support for our client and deal
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center border-0">
            <FontAwesomeIcon
              width={100}
              className="fs-2 py-4 theme_border theme_color_hover rounded-circle mx-auto mt-3"
              icon={faDollarSign}
            />
            <Card.Body>
              <Card.Title className="fs-6">DEALERSHIP</Card.Title>
              <hr className="w-25 mx-auto theme_color" />
              <Card.Text className="text-muted">
                We are provide dealership for long term at low security
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center border-0">
            <FontAwesomeIcon
              width={100}
              className="fs-2 py-4 theme_border theme_color_hover rounded-circle mx-auto mt-3"
              icon={faVault}
            />
            <Card.Body>
              <Card.Title className="fs-6">AFFORDABLE</Card.Title>
              <hr className="w-25 mx-auto theme_color" />
              <Card.Text className="text-muted">
                We are sell our product at affordable price
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
