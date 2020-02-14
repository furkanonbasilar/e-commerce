import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Cookie.scss";

const Cookie = ({ accept, close }) => {
  return (
    <div className="cookie-middle">
      <Row className="cookie-container">
        <i className="fas fa-times close-cookie" onClick={() => close()} />
        <Col className="col-9">
          <Row className="cookie-row" style={{ flexDirection: "column" }}>
            <Col className="cookie-header">This website uses cookies</Col>
            <Col>
              Website uses its own and third-party cookies for statistical purposes,
              to know your preferences, for website performance and interaction
              with social media offering publicity tailored to your interests.
              If you continue browsing, we consider that you accept its use. You
              can expand this information consulting our
              <span className="policy-page"> Cookies Policy Page.</span>
            </Col>
          </Row>
        </Col>
        <Col className="col-3 accept-col">
          <button className="accept-button" onClick={() => accept()}>
            ACCEPT
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Cookie;
