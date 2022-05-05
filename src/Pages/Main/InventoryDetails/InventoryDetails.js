import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import useInventoryDetail from "../../../hooks/useInventoryDetail";

const InventoryDetails = () => {
  const { id } = useParams();
  // const [inventory] = useInventoryDetail(id);
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id, inventory]);
  const { _id, name, img, price, quantity, supplier, description } = inventory;

  // Handle delivery button
  const handleDeliverd = () => {
    const quantity = inventory.quantity - 1;
    //  send data to server
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Reduce one item by delivery");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Handle restock button
  const handleRestock = (event) => {
    event.preventDefault();
    const quantity =
      parseInt(event.target.quantity.value) + parseInt(inventory.quantity);
    event.target.reset();
    //  send data to server
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast("Increase quantity by input value");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
              <Button
                onClick={handleDeliverd}
                className="w-100"
                variant="outline-themeButton"
              >
                Deliverd
              </Button>{" "}
              <ToastContainer />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="my-5">
          <h2>Restock the item</h2>
          <form onSubmit={handleRestock}>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="form-control"
              placeholder="Type restock quentity number"
            />
            <input
              type="submit"
              value="Restock"
              className="btn btn-outline-themeButton mt-2"
            />
          </form>
          <Link to={`/manage`}>
            <Button className="my-3" variant="outline-themeButton">
              Manage Inventories
            </Button>{" "}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryDetails;
