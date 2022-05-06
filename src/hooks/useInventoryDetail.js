import { useEffect, useState } from "react";
import axios from "axios";

const useInventoryDetail = (id) => {
  const [inventory, setInventory] = useState({});
  // Load data based on id
  useEffect(() => {
    const getItems = async () => {
      const url = `http://localhost:5000/inventory/${id}`;
      const { data } = await axios.get(url);
      setInventory(data);
    };
    getItems();
  }, [id, inventory]);

  return [inventory];
};

export default useInventoryDetail;
