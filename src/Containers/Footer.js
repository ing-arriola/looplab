import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import CenteredModal from "../components/CenteredModal";

const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <footer id="footer">
      <Container>
        <Row>
          <Col className="text-center py-4 ">
            <h3>LoopLAB</h3>
            <p>Coyright &copy; </p>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Contact Us
            </Button>

            <CenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
