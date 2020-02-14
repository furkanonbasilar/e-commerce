import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>404</Breadcrumb.Item>
      </Breadcrumb>
      <h3 className="error-header">404</h3>
      <div className="white-area">
        <Row>
          <Col className="ops-tag col-4">Oops!</Col>
          <Col className="col-8 padding__left">
            <h2 className="not-found">Sorry, this page could not be found!</h2>
            <p className="error-code">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="error-code">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <Link to="/" className="go-homepage">
              Go back to Homepage
            </Link>
            <h2 className="not-found">Search Our Site</h2>
            <input placeholder="Search" type="text" className="search-bar" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ErrorPage;
