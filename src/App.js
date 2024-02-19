import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Thankyou from "./pages/Thankyou";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// axios.defaults.baseURL = "https://checkbackend-zaxv.onrender.com";



const App = () => {
  const tok = localStorage.getItem("token");
const nav = useNavigate();
useEffect(() => {
  if (tok === "0" || tok === null) {
    nav("/login");
  }
}, []);
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
