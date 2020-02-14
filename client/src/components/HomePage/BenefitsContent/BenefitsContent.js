import React from "react";
import { Row, Col } from "react-bootstrap";
import { Delivery, Recycle, Clipboard } from "assets/icons/BenefitsSvg";
import "./BenefitsContent.scss";

const BenefitsContent = () => {
  return (
    <Row className="benefits">
      <Col className="col-4">
        <Row className="feature-row">
          <Col className="col-3 pt-2">
            <Delivery />
          </Col>
          <Col className="col-9">
            <p className="static-title">FOCUS</p>
            <p className="text">
              Our unwavering focus on superior service delivery and building
              next generation competencies
            </p>
          </Col>
        </Row>
      </Col>
      <Col className="col-4">
        <Row className="feature-row-reverse">
          <Col className="col-3 pt-2">
            <Recycle />
          </Col>
          <Col className="col-9">
            <p className="static-title">METHOD</p>
            <p className="text">
              A standardized methodology designed to deliver measurable business
              results and predictable costs
            </p>
          </Col>
        </Row>
      </Col>
      <Col className="col-4">
        <Row className="feature-row">
          <Col className="col-3 pt-2">
            <Clipboard />
          </Col>
          <Col className="col-9">
            <p className="static-title">KNOWLEDGE</p>
            <p className="text">
              A highly skilled, proactive workforce that reliably improves each
              client’s ROI while mitigating their business risk
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default BenefitsContent;
