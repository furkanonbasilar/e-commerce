import React, { Component } from "react";
import axios from "axios";
import Item from "components/HomePage/PopularItems/Item";
import { Carousel, Row, Col } from "react-bootstrap";
import "./PopularSlider.scss";

const NUM_OF_ITEM_IN_LIST = 8;

export default class PopularSlider extends Component {
  state = {
    data: [],
    visibleData: [],
    lastIndex: 0
  };
  renderProducts = () => {
    const { visibleData } = this.state;
    return visibleData.map((product, index) => (
      <Carousel.Item>
        <Item
          history={this.props.history}
          key={index.toString()}
          data={product}
        />
      </Carousel.Item>
    ));
  };

  componentDidMount() {
    const { lastIndex } = this.state;

    axios.get("Product.json").then(response =>
      this.setState({
        data: response.data,
        visibleData: response.data.slice(0, NUM_OF_ITEM_IN_LIST),
        lastIndex: lastIndex + NUM_OF_ITEM_IN_LIST
      })
    );
  }

  render() {
    return (
      <Row style={{ flexDirection: "column" }}>
        <Col className="popular-header">Popular Items</Col>
        <Col>
          <Carousel controls={false} interval={99999}>
            {this.renderProducts()}
          </Carousel>
        </Col>
      </Row>
    );
  }
}
