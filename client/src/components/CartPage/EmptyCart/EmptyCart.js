import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import PopularItems from "components/HomePage/PopularItems/PopularItems";
import "./EmptyCart.scss";

const EmptyCart = props => {
  return (
    <div style={{ backgroundColor: "#262a33" }}>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
      </Breadcrumb>
      <div className="empty-cart">
        <Row style={{ flexDirection: "column" }}>
          <Col className="col-12 empty-header">YOUR CART IS EMPTY</Col>
          <Col className="sad-face">
            <i className="far fa-frown fa-10x "></i>
          </Col>
        </Row>
      </div>
      <PopularItems history={props.history} isStaticShown={false} />;
    </div>
  );
};

export default EmptyCart;
