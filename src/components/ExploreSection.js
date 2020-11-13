import React from "react";

import { Container, Col, Row, Button } from "react-bootstrap";
const ExploreSection = () => {
  return (
    <section id="explore-head-section">
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1 className="display-4">Explore</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
              temporibus impedit natus, possimus molestias excepturi officiis
              libero iure cupiditate voluptatem ullam quod sequi delectus?{" "}
            </p>
            <Button variant="outline-secondary">Find out more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreSection;
