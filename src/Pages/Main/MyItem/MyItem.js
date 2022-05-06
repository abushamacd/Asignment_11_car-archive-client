import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import axios from "axios";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    const getItems = async () => {
      const url = `http://localhost:5000/inventory?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };

    getItems();
  }, [user]);
  return (
    <div>
      <h2>My Item: {items.length} </h2>
    </div>
  );
};

export default MyItem;
