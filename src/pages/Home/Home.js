import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/saga-modules/auth/actions";
import SideBar from "./Aside";

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
      <Row>
        <Col xs={4}>{/* <SideBar /> */}</Col>
        <Col>
          <Button onClick={handleClick}>Log out</Button>
        </Col>
      </Row>
      {/* <Row xs={}>
       
      </Row> */}
    </div>
  );
}
