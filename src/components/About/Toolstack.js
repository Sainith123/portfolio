import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode,SiPostman,SiSlack,SiVercel,SiReplit,SiDocker,SiZapier,SiRedis, } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiZapier />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>

    </Row>
  );
}

export default Toolstack;
