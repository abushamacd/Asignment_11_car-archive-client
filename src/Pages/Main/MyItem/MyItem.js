import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useInventory from "../../../hooks/useInventory";

const MyItem = () => {
  // Get user
  const [user] = useAuthState(auth);
  // Get data from hook
  const [inventoris, setInventoris] = useInventory();
  // Load & set user item on state
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    const getItems = async () => {
      const url = `https://car-archive-server.onrender.com/inventory?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, [user, inventoris]);

  // Delete Item form DB
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://car-archive-server.onrender.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaing = inventoris.filter(
            (inventory) => inventory._id !== id
          );
          setInventoris(remaing);
        });
    }
  };
  return (
    <Container>
      <h2 className="text-center my-5">
        {" "}
        <span>My </span>
        <span className="theme_color">Itmes </span>
        <span>({items.length}) </span>
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map((item) => (
          <Col key={item._id}>
            <Card>
              <Card.Img
                variant="top"
                className="img-fluid p-3 radius"
                src={item.img}
              />
              <Card.Body>
                <Card.Title className="theme_color text-center">
                  {item.name}
                </Card.Title>
                <p>
                  <b>
                    Price: <span className="theme_color">${item.price} </span>
                  </b>
                </p>
                <p className="d-flex justify-content-between">
                  <b>
                    Supplier:{" "}
                    <span className="theme_color">{item.supplier} </span>
                  </b>
                  <br />
                  <b>
                    Quantity:{" "}
                    <span className="theme_color">{item.quantity} </span>
                  </b>
                </p>
                <Card.Text title={item.description} className="text_justify">
                  {item.description.length > 20
                    ? item.description.slice(0, 100) + "..."
                    : item.description}
                </Card.Text>
                <Button
                  onClick={() => handleDelete(item._id)}
                  className="w-100"
                  variant="outline-themeButton"
                >
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

export default MyItem;
