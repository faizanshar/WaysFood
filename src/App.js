import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";


// component
import Home from "./components/home/Home";
import DetailFood from "./components/detailFood/detailFood";
import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";
import AddFood from "./components/add-food/add-food";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-food" element={<DetailFood />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-food" element={<AddFood />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
