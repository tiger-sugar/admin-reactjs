import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Banner from "./pages/Home/Banner";
import Home from "./pages/Home/Home";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}
