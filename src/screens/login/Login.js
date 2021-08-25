import React from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./Login.scss";

function Login() {
  return (
    <Container fluid className="min-vh-100">
      <Row
        className="min-vh-100 "
        style={
          {
            // backgroundColor: "green",
          }
        }
      >
        <Col lg={6} className="p-0">
          <div
            className="imageContainer w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/images/loginImage4.jpg')`,
            }}
          >
            <div className="glassContainer">
              <p>Be more Prodcutive</p>
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div
            className="w-100"
            style={{
              backgroundColor: "green",
              maxWidth: "400px",
            }}
          >
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <Form onSubmit={() => {}}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required></Form.Control>
                  </Form.Group>
                  <Button className="w-100 mt-2" type="submit">
                    Log In
                  </Button>
                </Form>
                <p className="text-center">I don't have an account, sign up</p>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
