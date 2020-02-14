import React, { Component } from "react";
import { Carousel, Card } from "react-bootstrap";
import "./FeaturedProducts.scss";
import axios from "axios";

export default class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.nextButton = React.createRef();

    this.state = {
      data: [],
      activeIndex: 0,
      maxIndex: 0
    };
  }
  componentDidMount() {
    axios.get("Product.json").then(response => {
      this.setState({
        data: response.data,
        maxIndex: response.data.length / 4 - 1
      });
    });
    this.tick = setInterval(() => this.nextButton.current.click(), 5000);
    this.carouselItems = [];
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  renderProducts = () => {
    let NUM_OF_LIST = this.props.tablet ? 2 : 4;
    const { data } = this.state;
    let carouselItems = [];
    let imageItems = [];

    data.map((product, index) => {
      imageItems.push(
        <Card key={product.id.toString()} className="feature-card">
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title className="feature-title">{product.name}</Card.Title>
            <Card.Text className="feature-text">{product.feature}</Card.Text>
          </Card.Body>
        </Card>
      );
      if (imageItems.length % NUM_OF_LIST === 0) {
        carouselItems.push(
          <Carousel.Item key={index.toString()} className="flexible">
            {imageItems}
          </Carousel.Item>
        );
        imageItems = [];
      }
    });
    return carouselItems;
  };

  prevIconHandler = () => {
    this.setState(prevState => ({
      activeIndex:
        prevState.activeIndex - 1 < 0
          ? prevState.maxIndex
          : prevState.activeIndex - 1
    }));
    clearInterval(this.tick);
    this.tick = setInterval(() => this.nextButton.current.click(), 5000); // clearing timeout
  };

  nextIconHandler = () => {
    this.setState(prevState => ({
      activeIndex:
        prevState.activeIndex + 1 > prevState.maxIndex
          ? 0
          : prevState.activeIndex + 1
    }));
    clearInterval(this.tick);
    this.tick = setInterval(() => this.nextButton.current.click(), 5000); // clearing timeout
  };

  render() {
    return (
      <div
        className="feature"
        style={{ height: "550px", backgroundColor: "#262a32" }}
      >
        <h1 className="text-center"> Featured Products</h1>
        <p className="text-center">
          Unde omnis iste natus error sit voluptatem
        </p>
        <div className="controllers">
          <button className="carousel-icon mr-2" onClick={this.prevIconHandler}>
            &#60;
          </button>
          <span>/// </span>
          <button
            className="carousel-icon ml-2"
            ref={this.nextButton}
            onClick={this.nextIconHandler}
          >
            &#62;
          </button>
        </div>
        <Carousel
          className="feature-slider"
          indicators={false}
          controls={false}
          activeIndex={this.state.activeIndex}
        >
          {this.renderProducts()}
        </Carousel>
      </div>
    );
  }
}
