import { useEffect, useState } from "react";
import axios from "axios";

const useInventoryDetail = (id) => {
  const [inventory, setInventory] = useState({});
  // Load data based on id
  useEffect(() => {
    const getItems = async () => {
      const url = `https://fierce-ocean-04327.herokuapp.com/inventory/${id}`;
      const { data } = await axios.get(url);
      setInventory(data);
    };
    getItems();
  }, [id, inventory]);

  return [inventory];
};

export default useInventoryDetail;
