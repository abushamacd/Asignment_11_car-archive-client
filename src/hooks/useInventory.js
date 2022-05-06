import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventoris, setInventoris] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventoris(data));
  }, [inventoris]);
  return [inventoris, setInventoris];
};

export default useInventory;
