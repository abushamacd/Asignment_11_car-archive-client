import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../../hooks/useInventory";
import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import SingleInventroy from "../SingleInventroy/SingleInventroy";
import Supplier from "../Supplier/Supplier";

const Home = () => {
  const [inventoris] = useInventory();
  // Inventory slice for home
  const slicedInventoris = inventoris.slice(0, 6);
  return (
    <div>
      <Banner />
      {/* Inventory Section */}
      <Container>
        <Row>
          <h2 className="text-center my-5">
            {" "}
            <span className="theme_color">Inventory</span>{" "}
            <span>Collection</span>
            <span> ({slicedInventoris.length}) </span>
          </h2>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {slicedInventoris.map((inventory) => (
            <SingleInventroy
              key={inventory._id}
              inventory={inventory}
            ></SingleInventroy>
          ))}
        </Row>
        <Row className="mx-auto w-25 text-center">
          <Link to={`/manage`}>
            <Button className="mb-5" variant="outline-themeButton">
              Manage Inventories
            </Button>{" "}
          </Link>
        </Row>
      </Container>
      <Supplier />
      <Newsletter />
    </div>
  );
};

export default Home;
