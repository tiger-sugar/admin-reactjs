import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./css/login.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/saga-modules/auth/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import background from "../../file/image/background_1.jpeg";
import api from "../../config/api";

function Login() {
  useEffect(() => {
    console.log("abc");
  }, []);
  const notify = (value) => toast(value);
  const [inputUsername, setinputUsername] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  const access_token = useSelector((state) => state.auth?.access_token);
  // console.log("log usser", access_token);
  const onLogin = () => {
    setisLoading(true);
    let dataLogin = {
      username: inputUsername,
      password: inputPassword,
    };
    axios
      .post(api.API_LOGIN, dataLogin)
      .then(({ data }) => {
        setisLoading(true);
        notify(data?.userInfo?.first_name);
        // setTimeout(() => {
        //   dispatch(loginSuccess({ dataLogin: data }));
        // }, 2000);
        console.log("log res", data);
      })
      .catch((err) => {
        notify(err?.response?.data?.msg);
      })
      .finally(() => {
        setTimeout(() => {
          setisLoading(false);
        }, 1000);
      });
  };

  return (
    <div className="Login">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => {
              setinputUsername(e.target.value);
            }}
            value={inputUsername}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setinputPassword(e.target.value);
            }}
            value={inputPassword}
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="btn-login"
          onClick={() => {
            console.log("button click");
            onLogin();
            // notify();
          }}
          variant="success"
        >
          {isLoading ? <Spinner animation="grow" variant="light" /> : "Submit"}
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Login;
