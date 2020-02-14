import React from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";
import FooterItems from "data/Footer.json";
import { Link } from "react-router-dom";
import "./MobileFooter.scss";

const MobileFooter = () => {
  const contactHandler = () => {
    return FooterItems.map(item => (
      <Col>
        <NavDropdown
          active
          id="collasible-nav-dropdown"
          className="mobile-dropdown"
          title={item.title}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "black"
            }}
          >
            {item.column.map(link => (
              <Link to="/error">{link}</Link>
            ))}
          </div>
        </NavDropdown>
      </Col>
    ));
  };
  return (
    <Row id="mobile-footer" style={{ flexDirection: "column" }}>
      <Col className="mobile__copyright">
        <p>&copy; CopyRight {new Date().getFullYear()}.</p>
        <p>All Rights Reserved.</p>
      </Col>
      {contactHandler()}
      <Col className="icon-col">
              <a
                target=" _blank"
                href="https://www.facebook.com/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
        
              <a target=" _blank" href="https://www.google.com">
              <i className="fab fa-google"></i>
              </a>
       
              <a target=" _blank" href="https://twitter.com/onbasi_lar">
              <i className="fab fa-twitter"></i>
              </a>
          
            <a target=" _blank" href="https://www.github.com/furkanonbasilar">
            <i className="fab fa-github" />
              </a>
      </Col>
    </Row>
  );
};

export default MobileFooter;
