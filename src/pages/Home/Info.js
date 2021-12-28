import React, { useEffect } from "react";

export default function Info() {
  useEffect(() => {
    console.log("info running");
  }, []);
  return (
    <div>
      <h2>Info</h2>
    </div>
  );
}
