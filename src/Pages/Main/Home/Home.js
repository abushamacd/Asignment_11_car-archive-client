import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Banner />
      <Inventory />
      <hr className="mt-5" />
      <Footer />
    </div>
  );
};

export default Home;
