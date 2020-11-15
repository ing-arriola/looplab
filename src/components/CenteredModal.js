import React from "react";
import { Modal, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
const CenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      color="text-muted"
      className="text-dark"
    >
      <Modal.Body>
        <h4 className="text-center">Contact Us</h4>
        <ContactForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CenteredModal;
