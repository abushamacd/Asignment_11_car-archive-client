import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Inventory />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
