import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import axios from "axios";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/saga-modules/auth/actions";
import api from "../../config/api";
function Login() {
  useEffect(() => {
    console.log("abc");
  }, []);
  const [inputUsername, setinputUsername] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  console.log("log usser", user);
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
        dispatch(loginSuccess({ dataLogin: data }));
        console.log("log res", data);
      })
      .catch((err) => {
        console.log("err", err.response);
      })
      .finally(() => {
        setTimeout(() => {
          setisLoading(false);
        }, 1000);
      });
  };

  return (
    <Container className="justify-content-md-center">
      <h2 className="text-login">LOGIN</h2>
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          onClick={() => {
            console.log("button click");
            onLogin();
          }}
          variant="primary"
        >
          {isLoading ? <Spinner animation="grow" variant="light" /> : "Submit"}
        </Button>
      </Form>
      {/* <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <FormControl
            onChange={(e) => {
              setinputUsername(e.target.value);
              console.log("log value", e.target.value);
            }}
            value={inputUsername}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <FormControl
            onChange={(e) => {
              setinputPassword(e.target.value);
              console.log("log value", e.target.value);
            }}
            value={inputPassword}
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button
          onClick={() => {
            console.log("button click");
            onLogin();
          }}
        >
          Đăng nhập
        </Button> */}
    </Container>
  );
}

export default Login;
