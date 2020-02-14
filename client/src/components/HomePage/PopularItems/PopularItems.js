import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "./PopularItems.scss";
import Item from "./Item";
import { Load } from "assets/icons/PopularItemsSvg";

const NUM_OF_ITEM_IN_LIST = 8;

export default class PopularItems extends Component {
  state = { data: [], visibleData: [], lastIndex: 0 };

  componentDidMount() {
    const { lastIndex } = this.state;

    axios.get("Product.json").then(response => {
      let filteredData = this.props.isStaticItemsShown
        ? response.data
        : response.data.filter(
            product => product.price || (product.price && product.url)
          );
      this.setState({
        data: filteredData,
        visibleData: filteredData.slice(0, NUM_OF_ITEM_IN_LIST),
        lastIndex: lastIndex + NUM_OF_ITEM_IN_LIST
      });
    });
  }

  renderProducts = () => {
    const { visibleData } = this.state;
    const rowArray = [];
    let colArray = [];

    visibleData.map((product, index) => {
      colArray.push(
        <Col
          key={product.id.toString()}
          className="col-3 padding-col col-md col-sm mt-4"
        >
          <Item
            key={index.toString()}
            data={product}
            history={this.props.history}
          />
        </Col>
      );
      if (
        colArray.length % 4 === 0 ||
        rowArray.length * 4 + colArray.length === visibleData.length
      ) {
        rowArray.push(
          <Row className="margin-row row-sm" key={product.id}>
            {colArray}
          </Row>
        );
        colArray = [];
      }
    });
    return rowArray;
  };

  onClickMore = () => {
    const { lastIndex, data } = this.state;

    this.setState({
      visibleData: data.slice(0, lastIndex + NUM_OF_ITEM_IN_LIST),
      lastIndex: lastIndex + NUM_OF_ITEM_IN_LIST
    });
  };

  render() {
    const { data, visibleData } = this.state;

    return (
      <Row className="mt-4 pb-4">
        <Col className="px-0">
          <Row>
            <Col className="popular-header">Popular Items</Col>
          </Row>
          {this.renderProducts()}

          {data.length !== visibleData.length ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <button className="load-button" onClick={this.onClickMore}>
                LOAD MORE
                <Load />
              </button>
            </div>
          ) : null}
        </Col>
      </Row>
    );
  }
}
