import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "../Auth/ForgotPassword";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export default function AuthRouter() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="auth/registration" element={<Register />} />
      <Route path="auth/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
