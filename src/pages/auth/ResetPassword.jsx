import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Jumbotron } from "../../components";
import "./styles.css";

const ResetPassword = () => {
    const [email, setEmail] = useState("")

    const handleOnChange = (event) => {
        const {  value } = event.target

       setEmail(value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        console.log(email)

        setEmail("")
    }

   
  return (
    <div className="auth-screen bg-info">
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h2 className="text-info text-center">Reset Password</h2>
              <hr />
              <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Enter Email..."
                    autoComplete="off"
                    required
                  />
                </Form.Group>
                

                <Form.Group className="my-3">
                  <Button type="submit" style={{ width: "100%" }}>Reset Password</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <NavLink  to="/">Login now</NavLink>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ResetPassword;
