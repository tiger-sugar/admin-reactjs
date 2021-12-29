import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/saga-modules/auth/actions";

export default function Home() {
  useEffect(() => {
    console.log("running home");
  }, []);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(logout());
  }
  return (
    <div>
      <h2 className=".ml-3">Home</h2>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}
