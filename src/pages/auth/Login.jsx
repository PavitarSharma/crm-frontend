import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Jumbotron } from "../../components";
import "./styles.css";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (event) => {
        const { name, value } = event.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const { email, password } = user

        console.log(email, password)

        setUser({
            email: "",
            password: ""
        })
    }

    const saveUser = user.email && user.password

   
  return (
    <div className="auth-screen bg-info">
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h2 className="text-info text-center">Login</h2>
              <hr />
              <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleOnChange}
                    placeholder="Enter Email..."
                    autoComplete="off"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    autoComplete="off"
                    required
                  />
                </Form.Group>

                <Form.Group className="my-3">
                  <Button disabled={!saveUser} type="submit" style={{ width: "100%" }}>Login</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              <NavLink to="/password-reset">Forgot Password</NavLink>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Login;
