import React, { Component, Fragment } from "react";
import { Breadcrumb, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import EmptyCart from "./EmptyCart/EmptyCart";
import "./CartPage.scss";
import {
  addProduct,
  decreaseProduct,
  deleteProduct
} from "components/redux/cart/action";
import {
  incrementTotalPrice,
  decrementTotalPrice
} from "components/redux/totalPrice/action";
const _ = require("lodash");

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.cartItems = [];
    this.state = {
      data: [],
      show: false,
      selectedOption: "freeshipping",
      shipPrice: 0
    };
  }

  componentDidMount() {
    axios.get("Product.json").then(response =>
      this.setState({
        data: response.data,
        show: true
      })
    );
  }

  handleOptionChange = (event, price) => {
    this.setState({
      selectedOption: event.target.value,
      shipPrice: price
    });
  };

  renderProducts = () => {
    const { data } = this.state;
    let groupIds = _.groupBy(this.props.productIDs, Math.floor);
    // [0,1] [2,2]

    for (let key in groupIds) {
      let object = {};
      object = data.find(product => product.id === parseInt(key));
      object.quantity = groupIds[key].length;
      this.cartItems.push(object);
    }

    this.cartItems = data.filter(product =>
      this.props.productIDs.find(id => product.id === id)
    );
    return this.cartItems.map(product => (
      <Row style={{ paddingBottom: "30px" }}>
        <Col className="col-2 image__col pr-0">
          <Image className="cart-image" src={product.img} />
        </Col>
        <Col className="col-5 pl-0 name-price-col">
          <p className="cart-name">{product.name}</p>
          <p className="price-light">
            $ {(product.price * product.quantity).toFixed(2)}
          </p>
        </Col>
        <Col className="col-2 inc_dec_button" style={{ position: "relative" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <i
              className="fas fa-minus minus-button"
              onClick={() => {
                this.props.decreaseProduct(product.id);
                this.props.decrementTotalPrice(product.price, 1);
              }}
            ></i>
            <input
              type="number"
              value={product.quantity}
              className="quantity-button"
            ></input>
            <i
              onClick={() => {
                this.props.addProduct(product.id);
                this.props.incrementTotalPrice(product.price, 1);
              }}
              className="fas fa-plus plus__button"
            ></i>
          </div>
        </Col>
        <Col className="col-2 price-dark">
          ${(product.price * product.quantity).toFixed(2)}
        </Col>
        <Col className="col-1 times-button">
          <i
            className="fas fa-times "
            onClick={() => {
              this.props.deleteProduct(product.quantity, product.id);
              this.props.decrementTotalPrice(product.price, product.quantity);
            }}
          ></i>
        </Col>
      </Row>
    ));
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Fragment>
        {this.props.productIDs.length !== 0 ? (
          <div className="cart-page">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="cart-header">SHOPPING CART</h1>
            <div style={{ backgroundColor: "white" }}>
              {this.state.show ? (
                <div className="product-section">{this.renderProducts()} </div>
              ) : null}
              <Row className="process-section">
                <Col className="col-12 buttons_col" style={{ display: "flex" }}>
                  <div style={{ width: "100%" }}>
                    <button className="coupon-code">Enter Cupon Code</button>
                    <button className="apply__button">APPLY</button>
                  </div>
                  <div className="proceed_div">
                    <button className="update-cart">UPDATE CART</button>
                    <button className="checkout-button">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </Col>
                <Col className="col-12">
                  <Row className="subtotal_row">
                    <Col className="col-6 empty_col"></Col>
                    <Col className="col-3 normal-text"> CART SUBTOTAL:</Col>
                    <Col className="col-3 bold-text">
                      ${this.props.totalPrice.toFixed(2)}
                    </Col>
                  </Row>
                </Col>
                <Col className="col-12">
                  <Row className="radio_row">
                    <Col className="col-6 empty_col"></Col>
                    <Col className="col-3 bold-text">
                      SHIPPING AND HANDLING:
                    </Col>
                    <Col className="col-3 normal-text">
                      <form>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              value="flatrate"
                              checked={selectedOption === "flatrate"}
                              onChange={e => this.handleOptionChange(e, 10)}
                            />
                            Flat Rate: <span>$10.00</span>
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              value="freeshipping"
                              checked={selectedOption === "freeshipping"}
                              onChange={e => this.handleOptionChange(e, 0)}
                            />
                            Free Shipping
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              value="international"
                              checked={selectedOption === "international"}
                              onChange={e => this.handleOptionChange(e, 60)}
                            />
                            International: <span>$60.00</span>
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              value="localdelivery"
                              checked={selectedOption === "localdelivery"}
                              onChange={e => this.handleOptionChange(e, 5)}
                            />
                            Local Delivery: <span>$5.00</span>
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              value="localpickup"
                              checked={selectedOption === "localpickup"}
                              onChange={e => this.handleOptionChange(e, 0)}
                            />
                            Local Pickup (Free)
                          </label>
                        </div>
                      </form>
                    </Col>
                  </Row>
                </Col>
                <Col className="col-12 ">
                  <Row className="order_total_row">
                    <Col className="col-6 empty_col"></Col>
                    <Col className="col-3 bold-text order-total">
                      ORDER TOTAL:
                    </Col>
                    <Col className="col-3 price-big">
                      $
                      {(this.props.totalPrice + this.state.shipPrice).toFixed(
                        2
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        ) : (
          <EmptyCart history={this.props.history} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    productIDs: state.cart.productIDs,
    totalPrice: state.totalPrice.totalPrice
  };
};

const mapDispatchToProps = {
  incrementTotalPrice,
  decrementTotalPrice,
  addProduct,
  decreaseProduct,
  deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
