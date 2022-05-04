import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../../hooks/useInventoryDetail";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory] = useInventoryDetail(id);

  return (
    <div>
      <h2>Inventory details: {inventory._id}</h2>
    </div>
  );
};

export default InventoryDetails;
