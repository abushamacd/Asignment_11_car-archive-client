import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./SingleInventroy.css";
import { useNavigate } from "react-router-dom";

const SingleInventroy = ({ inventory }) => {
  // De-structuring
  const { _id, name, img, price, quantity, supplier, description } = inventory;

  const navigate = useNavigate();
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <Col>
      <Card>
        <Card.Img variant="top" className="img-fluid p-3 radius" src={img} />
        <Card.Body>
          <Card.Title className="theme_color text-center">{name}</Card.Title>
          <p>
            <b>
              Price: <span className="theme_color">${price} </span>
            </b>
          </p>
          <p className="d-flex justify-content-between">
            <b>
              Supplier: <span className="theme_color">{supplier} </span>
            </b>
            <br />
            <b>
              Quantity: <span className="theme_color">{quantity} </span>
            </b>
          </p>
          <Card.Text title={description} className="text_justify">
            {description.length > 20
              ? description.slice(0, 120) + "..."
              : description}
          </Card.Text>
          <Button
            onClick={() => navigateToInventoryDetail(_id)}
            className="w-100"
            variant="outline-themeButton"
          >
            Update
          </Button>{" "}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleInventroy;
