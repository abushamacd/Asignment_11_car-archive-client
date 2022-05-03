import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const SingleInventroy = ({ inventory }) => {
  // De-structuring
  const { name, img, price, quantity, description } = inventory;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" className="img-fluid" src={img} />
        <Card.Body>
          <Card.Title className="theme_color text-center">{name}</Card.Title>
          <p className="d-flex justify-content-between">
            <b>
              Price: <span className="theme_color">${price} </span>
            </b>
            <br />
            <b>
              Quantity: <span className="theme_color">{quantity} </span>
            </b>
          </p>
          <Card.Text title={description} className="text_justify">
            {description.length > 20
              ? description.slice(0, 150) + "..."
              : description}
          </Card.Text>
          <Button className="w-100" variant="outline-themeButton">
            Update
          </Button>{" "}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleInventroy;
