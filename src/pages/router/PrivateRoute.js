import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../Home/About";
import Home from "../Home/Home";
import Info from "../Home/Info";
import Layout from "../Home/Layout";
export default function PrivateRoute(props) {
  console.log("low case", props);
  return (
    <Routes>
      <Route index element={<Layout setLocale={props.setLocale()} />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<Info />} />
    </Routes>
  );
}
