import React from "react";
import { Row, Col } from "react-bootstrap";
import "./FilterButton.scss";
import ColorButtons from "./ColorButtons";

const FilterButton = () => {
  return (
    <div className="filter-container">
      <Row className="margin-bottom row_left_container">
        <Col className="col-4">
          <span>Price</span>
          <select className="filter-buttons">
            <option value="hundred">$0.00 — $100.00</option>
            <option value="two_hundred">$100.00 - $200.00</option>
          </select>
        </Col>
        <Col className="col-4 flex__center">
          <span>Brands</span>
          <select className="filter-buttons ">
            <option value="ukraine">Ukraine sport</option>
            <option value="romanian">Romanian sport</option>
          </select>
        </Col>
        <Col className="col-4 flex__end">
          <span>Size</span>
          <select className="filter-buttons">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
          </select>
        </Col>
      </Row>
      <Row className="row_right_container ">
        <Col className="col-4" style={{ display: "flex" }}>
          <span>Color</span>
          <ColorButtons />
        </Col>
        <Col className="col-4 flex__center">
          <span>Sort by</span>
          <select className="filter-buttons">
            <option value="small">Price</option>
            <option value="medium">Size</option>
          </select>
        </Col>
        <Col className="col-4 flex__end">
          <span>Show</span>
          <select className="filter-buttons">
            <option value="16per">16 per page</option>
            <option value="20per">20 per page</option>
          </select>
        </Col>
      </Row>
    </div>
  );
};

export default FilterButton;
