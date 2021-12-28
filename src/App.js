import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import AuthRouter from "./pages/router/AuthRouter";
import PrivateRoute from "./pages/router/PrivateRoute";
export default function App() {
  const user = useSelector((state) => state.auth?.user);
  console.log("log user", user);
  return <>{!user ? <AuthRouter /> : <PrivateRoute />}</>;
}
