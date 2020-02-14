import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Breadcrumb, Carousel, Image } from "react-bootstrap";
import axios from "axios";
import "./ProductPage.scss";
import SmallImage from "components/ProductPage/SmallImage/SmallImage";
import ReadMoreReact from "read-more-react";
import BenefitsContent from "components/HomePage/BenefitsContent/BenefitsContent";
import { addProduct, decreaseProduct } from "components/redux/cart/action";
import {
  incrementTotalPrice,
  decrementTotalPrice
} from "components/redux/totalPrice/action";
import ProductDetails from "components/ProductPage/ProductDetails/ProductDetails";
import { connect } from "react-redux";
import SpecialItems from "./SpecialItems/SpecialItems";
import MediaQuery from "react-responsive";
import CarouselImages from "./CarouselImages/CarouselImages";

class ProductPage extends Component {
  state = {
    activeIndex: 0,
    quantity: 1,
    images: [],
    popularData: [],
    detailsData: []
  };

  componentDidMount() {
    axios.get("Product.json").then(response => {
      let filteredData = response.data.filter(
        product => product.price || (product.price && product.url)
      );

      let details = [...Array(3)].map((_, index) => {
        if (index === 0) {
          return response.data[0].description;
        } else if (index === 1) {
          return response.data[0].additionalInfo;
        } else {
          return response.data[0].reviews;
        }
      });
      this.setState({
        images: response.data[0].images,
        popularData: filteredData.slice(0, 4),
        detailsData: details
      });
    });
  }
  quantityForReduxHandler = id => {
    const quantityArray = [];
    [...Array(this.state.quantity)].map(_ => quantityArray.push(id));
    return quantityArray;
  };

  renderCarouselItems = () => {
    const { images } = this.state;

    return images.map((image, index) => {
      return (
        <Carousel.Item key={index.toString()}>
          <Image width="100%" height="100%" src={image} />
        </Carousel.Item>
      );
    });
  };

  activeIndexHandler = index => {
    this.setState({ activeIndex: index });
  };

  renderSmallImages = () => {
    const { images, activeIndex } = this.state;
    return images.map((image, index) => (
      <SmallImage
        key={index.toString()}
        imageUrl={image}
        specialKey={index}
        selected={activeIndex}
        setActiveIndex={() => this.activeIndexHandler(index)}
      />
    ));
  };

  render() {
    const { detailsData, popularData } = this.state;
    let text =
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas  sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
    return (
      <Fragment>
        <div className="product-page">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">Theme</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Ruffle Front V-Neck Cardigan
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="product-header">Ruffle Front V-Neck Cardigan</h1>
          <div className="product-container">
            <Row className="product-select">
              <Col className="col-6">
                <Carousel
                  onSelect={() => {}}
                  fade={true}
                  activeIndex={this.state.activeIndex}
                  interval={null}
                  controls={false}
                  indicators={false}
                >
                  {this.renderCarouselItems()}
                </Carousel>
              </Col>
              <Col className="small-images col-1">
                <MediaQuery maxWidth="767px">
                  {isMobile =>
                    isMobile ? (
                      <CarouselImages
                        imagesData={this.state.images}
                        setActiveIndex={this.activeIndexHandler}
                        activeIndex={this.state.activeIndex}
                      />
                    ) : (
                      this.renderSmallImages()
                    )
                  }
                </MediaQuery>
              </Col>
              <Col className="select-col col-5">
                <Row style={{ flexDirection: "column" }}>
                  <Col>
                    <h1 className="prize-header">$299.99</h1>
                  </Col>
                  <Col className="color__col">
                    <select className="pick-color">
                      <option value="dark-gray">Dark Gray</option>
                      <option value="green">Green</option>
                    </select>
                  </Col>

                  <Col className="adding__col">
                    <div
                      style={{ display: "inline-block", position: "relative" }}
                    >
                      <i
                        className="fas fa-minus minus__button"
                        onClick={() =>
                          this.setState(prevState => ({
                            quantity:
                              prevState.quantity - 1 === 0
                                ? 1
                                : prevState.quantity - 1
                          }))
                        }
                      ></i>
                      <input
                        type="number"
                        onChange={e =>
                          this.setState({ quantity: parseInt(e.target.value) })
                        }
                        value={
                          this.state.quantity > 100
                            ? this.setState({ quantity: 100 })
                            : this.state.quantity
                        }
                        className="quantity__button"
                      ></input>
                      <i
                        className="fas fa-plus plus__button"
                        onClick={() =>
                          this.setState(prevState => ({
                            quantity:
                              prevState.quantity + 1 > 100
                                ? 100
                                : prevState.quantity + 1
                          }))
                        }
                      ></i>
                    </div>
                    <button
                      className="add-cart"
                      onClick={() => {
                        this.props.incrementTotalPrice(
                          299.99,
                          this.state.quantity
                        );
                        this.props.addProduct(this.quantityForReduxHandler(24));
                      }}
                    >
                      ADD TO CART
                    </button>
                  </Col>
                  <Col>
                    <ReadMoreReact text={text} min={50} ideal={100} max={150} />
                  </Col>
                  <Col className="product-footer">
                    <span>Share</span>
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
              </Col>
            </Row>
          </div>
          <ProductDetails data={detailsData} />
          <SpecialItems history={this.props.history} data={popularData} />
          <MediaQuery maxWidth="767px">
            {isMobile =>
              isMobile ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "30px"
                  }}
                >
                  <button
                    className="scroll-top"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    SCROLL TO TOP
                  </button>
                </div>
              ) : null
            }
          </MediaQuery>
        </div>
        <BenefitsContent />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  incrementTotalPrice,
  decrementTotalPrice,
  addProduct,
  decreaseProduct
};

export default connect(null, mapDispatchToProps)(ProductPage);
