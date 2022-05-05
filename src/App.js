import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Main/Home/Home";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Register from "./Pages/Shared/User/Register/Register";
import Login from "./Pages/Shared/User/Login/Login";
import ResetPassword from "./Pages/Shared/User/ResetPassword/ResetPassword";
import RequiredAuth from "./Pages/Shared/RequiredAuth/RequiredAuth";
import InventoryDetails from "./Pages/Main/InventoryDetails/InventoryDetails";
import Blogs from "./Pages/Main/Blogs/Blogs";
import AddItem from "./Pages/Main/AddItem/AddItem";
import Inventory from "./Pages/Main/Inventory/Inventory";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/reset" element={<ResetPassword></ResetPassword>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route
          path="/inventory/:id"
          element={
            <RequiredAuth>
              <InventoryDetails />
            </RequiredAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequiredAuth>
              <Inventory />
            </RequiredAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequiredAuth>
              <AddItem></AddItem>
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
