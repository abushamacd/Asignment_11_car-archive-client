import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useInventory from "../../../hooks/useInventory";
import SingleInventroy from "../SingleInventroy/SingleInventroy";

const Inventory = () => {
  const [inventoris] = useInventory();
  return (
    <Container>
      <h2 className="text-center my-5">
        {" "}
        <span>All </span>
        <span className="theme_color">Inventory</span>
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {inventoris.map((inventory) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                className="img-fluid p-3 radius"
                src={inventory.img}
              />
              <Card.Body>
                <Card.Title className="theme_color text-center">
                  {inventory.name}
                </Card.Title>
                <p>
                  <b>
                    Price:{" "}
                    <span className="theme_color">${inventory.price} </span>
                  </b>
                </p>
                <p className="d-flex justify-content-between">
                  <b>
                    Supplier:{" "}
                    <span className="theme_color">{inventory.supplier} </span>
                  </b>
                  <br />
                  <b>
                    Quantity:{" "}
                    <span className="theme_color">{inventory.quantity} </span>
                  </b>
                </p>
                <Card.Text
                  title={inventory.description}
                  className="text_justify"
                >
                  {inventory.description.length > 20
                    ? inventory.description.slice(0, 100) + "..."
                    : inventory.description}
                </Card.Text>
                <Button className="w-100" variant="outline-themeButton">
                  Delete this item
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Inventory;
