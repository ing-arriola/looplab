import React from "react";
import { Card, Form, Button } from "react-bootstrap";
function CardForm() {
  return (
    <Card bg={"primary"} className="text-center card-form ">
      <Card.Body>
        <Card.Title>Sign up Today</Card.Title>
        <Card.Text>Please fill out this form to register</Card.Text>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button className="btn-block" variant="outline-light" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CardForm;
