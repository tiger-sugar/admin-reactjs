import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../Home/About";
import Home from "../Home/Home";
import Info from "../Home/Info";

export default function PrivateRoute() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<Info />} />
    </Routes>
  );
}
