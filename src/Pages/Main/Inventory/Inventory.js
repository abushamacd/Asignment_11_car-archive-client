import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../../hooks/useInventory";
import SingleInventroy from "../SingleInventroy/SingleInventroy";

const Inventory = () => {
  const [inventoris] = useInventory();
  return (
    <Container>
      <h2 className="text-center my-5">
        {" "}
        <span className="theme_color">Inventory</span> <span>Collection</span>
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {inventoris.map((inventory) => (
          <SingleInventroy
            key={inventory._id}
            inventory={inventory}
          ></SingleInventroy>
        ))}
      </Row>
      <div className="text-center">
        <Link to={`/manage`}>
          <Button className="my-3" variant="outline-themeButton">
            Manage Inventories
          </Button>{" "}
        </Link>
      </div>
    </Container>
  );
};

export default Inventory;
