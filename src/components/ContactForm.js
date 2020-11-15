import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form className="text-dark">
      <Form.Group controlId="username">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="Message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="textarea" placeholder="Write your message" />
      </Form.Group>

      <Button className="btn-block" variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
