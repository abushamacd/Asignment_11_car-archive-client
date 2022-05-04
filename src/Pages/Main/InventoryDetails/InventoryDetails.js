import React from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Inventory details: {id}</h2>
    </div>
  );
};

export default InventoryDetails;
