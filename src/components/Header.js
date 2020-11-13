import React from "react";
import { Container, Col } from "react-bootstrap";
import RowHeader from "./RowHeader";
import CardForm from "./CardForm";
const Header = () => {
  return (
    <div id="home-section">
      <div className="dark-overlay">
        <div className="home-inner">
          <Container className="d-flex">
            <Col lg="8" className="d-none d-lg-block">
              <h1 className="display-4">
                Build <strong> social profiles</strong> and gain revenue
                <strong> profits</strong>
              </h1>
              <RowHeader />
              <RowHeader />
              <RowHeader />
            </Col>
            <Col lg="4">
              <CardForm />
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*







*/
