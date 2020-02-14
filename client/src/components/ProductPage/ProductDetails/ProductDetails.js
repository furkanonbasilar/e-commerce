import "./ProductDetails.scss";
import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";

class ProductDetails extends Component {
  state = {
    detailsData: this.props.data,
    activeIndex: 0,
    show: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ detailsData: nextProps.data });
    }
  }

  descriptionHandler = () => {
    return (
      <Row>
        <Col>{this.state.detailsData[this.state.activeIndex]}</Col>
      </Row>
    );
  };
  render() {
    return (
      <div className="product-details">
        <Row style={{ flexDirection: "column" }}>
          <Col className="col-12 details-header">
            <h1
              className={
                this.state.activeIndex === 0
                  ? "background__dark"
                  : "hover__detail"
              }
              onClick={() => this.setState({ activeIndex: 0 })}
            >
              Description
            </h1>
            <h1
              className={
                this.state.activeIndex === 1
                  ? "background__dark"
                  : "hover__detail"
              }
              onClick={() => this.setState({ activeIndex: 1 })}
            >
              Additional Information
            </h1>
            <h1
              className={
                this.state.activeIndex === 2
                  ? "background__dark"
                  : "hover__detail"
              }
              onClick={() => this.setState({ activeIndex: 2 })}
            >
              Reviews (3)
            </h1>
          </Col>
          <Col className="col-12" style={{ padding: 0 }}>
            <Row className="product-information">
              {this.descriptionHandler()}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductDetails;
