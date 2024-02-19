import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Thankyou from "./pages/Thankyou";
import axios from "axios";

axios.defaults = "https://checkbackend-zaxv.onrender.com";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
