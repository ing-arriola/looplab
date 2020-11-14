import React from "react";

import { Container, Col, Row, Button } from "react-bootstrap";
const ExploreHeader = ({ background, title, outline }) => {
  return (
    <section id="explore-head-section" className={background}>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1 className="display-4">{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
              temporibus impedit natus, possimus molestias excepturi officiis
              libero iure cupiditate voluptatem ullam quod sequi delectus?{" "}
            </p>
            <Button variant={outline}>Find out more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreHeader;
