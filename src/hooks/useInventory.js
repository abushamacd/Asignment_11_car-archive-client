import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventoris, setInventoris] = useState([]);

  useEffect(() => {
    fetch("inventory.json")
      .then((res) => res.json())
      .then((data) => setInventoris(data));
  }, []);
  return [inventoris, setInventoris];
};

export default useInventory;
