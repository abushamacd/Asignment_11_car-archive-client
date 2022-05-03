import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Main/Home/Home";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
