import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/info");
  }
  return (
    <div>
      <h2>about</h2>
      <button onClick={handleClick}>Submit</button>
      <Link to="/info">Info ne</Link>
      <Outlet></Outlet>
    </div>
  );
}
