import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Inventory />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
