import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
