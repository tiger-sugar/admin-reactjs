import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    console.log("running home");
  }, []);
  return (
    <div>
      <h2>Home</h2>
      <Link to="about">About ne</Link>
      <Link to="info">Info ne</Link>
    </div>
  );
}
