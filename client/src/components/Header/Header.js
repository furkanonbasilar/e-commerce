import React, { Component, createRef } from "react";
import {
  Navbar,
  Image,
  Nav,
  NavDropdown,
  Row,
  Col,
  Badge
} from "react-bootstrap";
import "./Header.scss";
import Categories from "../../data/Categories.json";
import Sale from "../../data/Sale.json";
import Img from "../../assets/res/images";
import Login from "../HomePage/Login/Login";
import { Search, Profile, Heart, Bag } from "assets/icons/HeaderSvg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }
  state = {
    modalShow: false,
    isMenuOpened: false,
    showDropdown: false
  };

  productCategoriesHandler = () => {
    return Categories.map(category => (
      <Col key={category.id.toString()} className="col-3 category__item">
        {category.column.map((product, index) => (
          // Link is nessecary for route dom and also Nav.Link is needed for closing menu
          <NavDropdown.Item className="first-dropdown-menu">
            <Link
              onClick={() =>
                this.setState({
                  isMenuOpened: false,
                  showDropdown: false
                })
              }
              key={index.toString()}
              className="dropdown-item"
              to="/error"
            >
              {product}
            </Link>
          </NavDropdown.Item>
        ))}
      </Col>
    ));
  };

  saleProductsHandler = () => {
    return Sale.map(saleProduct => (
      <Col key={saleProduct.id.toString()} className="col-3 category__item">
        {saleProduct.column.map((product, index) => (
          <NavDropdown.Item className="first-dropdown-menu">
            <Link
              onClick={() =>
                this.setState({
                  isMenuOpened: false,
                  showDropdown: false
                })
              }
              key={index.toString() + "-cate"}
              className="dropdown-item"
              to="/error"
            >
              {product}
            </Link>
          </NavDropdown.Item>
        ))}
      </Col>
    ));
  };
  setModalShow = () => {
    this.setState(prevState => ({ modalShow: !prevState.modalShow }));
  };

  renderBurgerButton = () => {
    return (
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="toggle__button"
        onClick={() =>
          this.setState(prevState => ({
            isMenuOpened: !prevState.isMenuOpened
          }))
        }
      >
        <i
          style={{ fontSize: 24 }}
          className={
            this.state.isMenuOpened ? "fa fa-times fa-1x" : "fa fa-bars fa-1x"
          }
        />
      </Navbar.Toggle>
    );
  };

  renderBrand = () => {
    return (
      <Link className="__logo" to="/">
        <Navbar.Brand className="d-flex brand">
          <Image width="63px" height="65px" src={Img.logo} />
        </Navbar.Brand>
      </Link>
    );
  };

  renderMenuItems = () => {
    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header-1">
          <NavDropdown
            // active
            show={this.state.showDropdown}
            onMouseEnter={() =>
              this.setState({
                showDropdown: true
              })
            }
            onMouseLeave={() =>
              this.setState({
                showDropdown: false
              })
            }
            rootCloseEvent="click"
            menuRole="menu"
            className={
              this.state.showDropdown
                ? "dropdown__hover dropdown__item"
                : "dropdown__item"
            }
            title="SERVICES"
            id="collasible-nav-dropdown"
          >
            {this.props.isMobile ? (
              <div>
                <NavDropdown title="PRODUCT CATEGORIES">
                  {this.productCategoriesHandler()}
                </NavDropdown>
                <NavDropdown title="SALE">
                  {this.saleProductsHandler()}
                </NavDropdown>
              </div>
            ) : (
              <Row style={{ marginTop: "56px" }}>
                <Col className="col-9">
                  <Row
                    className="justify-content-between"
                    style={{ marginBottom: "25px" }}
                  >
                    <Col
                      className=" category__header"
                      style={{ paddingLeft: "37px" }}
                    >
                      PRODUCT CATEGORIES
                    </Col>

                    <Col className="d-flex justify-content-end  category__header category_sale">
                      SALE
                    </Col>
                  </Row>
                  <Row>
                    {this.productCategoriesHandler()}
                    {this.saleProductsHandler()}
                  </Row>
                </Col>
                <Col className="col-3 col_image">
                  <Image className="radius" src={Img.category} />
                </Col>
              </Row>
            )}
          </NavDropdown>
          <Nav.Link eventKey="company" className="header__items">
            COMPANY
          </Nav.Link>
          <Nav.Link className="header__items">LIBRARY</Nav.Link>
          <Nav.Link className="header__items">CONTACT US </Nav.Link>
          {this.props.isMobile ? (
            <Image className="radius mobile-image" src={Img.category} />
          ) : null}
          <NavDropdown className="light-dropdown" title="EN">
            <Nav.Link>EN</Nav.Link>
            <Nav.Link>RO</Nav.Link>
            <Nav.Link>UA</Nav.Link>
          </NavDropdown>
          <NavDropdown className="light-dropdown" title="$ US">
            <Nav.Link>$ US</Nav.Link>
            <Nav.Link>RON</Nav.Link>
            <Nav.Link>UA</Nav.Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    );
  };

  renderFeatureButtons = () => {
    return (
      <Nav className="header-2">
        <Link to="category">
          <Search />
        </Link>
        <Nav.Link onClick={this.setModalShow}>
          <Profile />
        </Nav.Link>
        <Link to="/error" className="alerts ">
          <Heart />
          <Badge className="rounded-circle heart" variant="success">
            {this.props.wishListQuantity}
          </Badge>
        </Link>
        <Link to="/cart" className="alerts ">
          <Bag />
          <Badge className="rounded-circle bag" variant="success">
            {this.props.productQuantity}
          </Badge>
        </Link>
      </Nav>
    );
  };
  render() {
    return (
      <header>
        <Navbar
          id="header"
          expanded={this.state.isMenuOpened}
          expand="lg"
          className="navbar-expand-md"
        >
          <Login show={this.state.modalShow} onHide={this.setModalShow} />
          {this.renderBurgerButton()}
          {this.renderBrand()}
          {this.renderMenuItems()}
          {this.renderFeatureButtons()}
        </Navbar>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    productQuantity: state.cart.productIDs.length,
    wishListQuantity: state.wishList.wishIDs.length
  };
};

export default connect(mapStateToProps)(Header);
