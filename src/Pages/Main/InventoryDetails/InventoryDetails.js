import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../../hooks/useInventoryDetail";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory] = useInventoryDetail(id);
  const { _id, name, img, price, quantity, supplier, description } = inventory;

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Img
              variant="top"
              className="img-fluid p-3 radius"
              src={img}
            />
            <Card.Body>
              <Card.Title className="theme_color text-center">
                {name}
              </Card.Title>
              <p className="d-flex justify-content-between">
                <b>
                  Price: <span className="theme_color">${price} </span>
                </b>
                <br />
                <b>
                  Supplier: <span className="theme_color">{supplier} </span>
                </b>
              </p>
              <p className="d-flex justify-content-between">
                <b>
                  SKU: <span className="theme_color">{_id} </span>
                </b>
                <br />
                <b>
                  Quantity: <span className="theme_color">{quantity} </span>
                </b>
              </p>
              <Card.Text title={description} className="text_justify">
                {description}
              </Card.Text>
              <Button className="w-100" variant="outline-themeButton">
                Deliverd
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryDetails;
