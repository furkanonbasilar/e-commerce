// @ts-nocheck
import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col, Image, Button } from "react-bootstrap";
import "./MainSlider.scss";
import MainElements from "data/MainSlider.json";
import Img from "../../../assets/res/images";
import { Link } from "react-router-dom";

export default class Slider extends Component {
  renderProduct = () => {
    let sliderCount = MainElements.length / 3;
    return [...Array(sliderCount)].map(_ =>
      MainElements.map(items => (
        <Carousel.Item style={{ position: "relative" }}>
          <div className={items.classNames}>
            <h1>{items.header}</h1>
            <p>{items.details}</p>
            <Link to="/category">
              <button className="view-button">VIEW MORE</button>
            </Link>
          </div>
          <Image className="d-block img-border" src={items.images} />
        </Carousel.Item>
      ))
    );
  };
  render() {
    return (
      <Row id="homepage-slider">
        <Col className="col-9 px-0">
          <Carousel controls={false} interval={99999} wrap={true}>
            {this.renderProduct()}
          </Carousel>
        </Col>
        <Col className="col-3 pl-4 pr-0 col-3-md">
          <Image src={Img.summersale} className="sale-pic" />
          <div className="facebook-column">
            <p className="follow-facebook">Follow us on Facebook</p>
            <p className="facebook-p">
              Sed ut perspiciatis unde omnis iste natus error sit
            </p>
            <a
              target=" _blank"
              href="https://www.facebook.com/"
            >
              <Button className="facebook d-flex justify-content-evenly mx-auto">
                <svg width="8px" height="17px">
                  <path
                    className="icon"
                    fill-rule="evenodd"
                    fill="rgb(58, 91, 150)"
                    d="M8.000,6.000 L5.000,6.000 L5.000,4.000 C5.000,3.338 5.720,2.924 6.034,2.924 C6.346,2.924 7.956,2.924 7.956,2.924 L7.956,0.011 L5.308,0.000 C2.369,0.000 2.000,2.610 2.000,4.000 L2.000,6.000 L0.000,6.000 L0.000,9.000 L2.000,9.000 C2.000,12.852 2.000,17.000 2.000,17.000 L5.000,17.000 C5.000,17.000 5.000,12.807 5.000,9.000 L8.000,9.000 L8.000,6.000 Z"
                  />
                </svg>
                <p className="d-inline mb-0 pr-1">FOLLOW</p>
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    );
  }
}
