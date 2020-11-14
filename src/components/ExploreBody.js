import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

import RowHeader from "./RowHeader";
function ExploreBody({ orderImage, orderText, image, bgColor }) {
  const data = `text-muted py-5 ${bgColor}`;
  return (
    <section id="explore-body" className={data}>
      <Container>
        <Container>
          <Row>
            <Col className={orderImage} lg={6}>
              <Image src={image} roundedCircle fluid className="mb-3" />
            </Col>
            <Col className={orderText} lg={6}>
              <h3> Explore & Connect </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                modi exercitationem laboriosam cum incidunt aperiam enim unde
                commodi praesentium? Dolores!
              </p>
              <RowHeader color="#fff" background="#333" />
              <RowHeader color="#fff" background="#333" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default ExploreBody;
