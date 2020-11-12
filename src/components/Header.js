import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <div id="home-section">
      <div className="dark-overlay">
        <div className="home-inner">
          <Container>
            <Row>
              <Col lg="8" className="d-none d-lg-block">
                <h1 className="display-4">
                  Build <strong> social profiles</strong> and gain revenue
                  <strong> profits</strong>
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
