import React from "react";
import { Carousel } from "react-bootstrap";
import SmallImage from "components/ProductPage/SmallImage/SmallImage";
import "./CarouselImages.scss";

const CarouselImages = ({ imagesData, activeIndex, setActiveIndex }) => {
  const renderCarousel = () => {
    let carouselItem = [];
    let imageItems = [];
    imagesData.map((image, index) => {
      imageItems.push(
        <SmallImage
          key={index.toString()}
          imageUrl={image}
          specialKey={index}
          selected={activeIndex}
          setActiveIndex={() => setActiveIndex(index)}
        />
      );
      if (imageItems.length % 3 === 0) {
        carouselItem.push(<Carousel.Item>{imageItems}</Carousel.Item>);
        imageItems = [];
      }
      if (
        (imagesData.length % 3) + carouselItem.length * 3 ===
        imagesData.length
      ) {
        carouselItem.push(<Carousel.Item>{imageItems}</Carousel.Item>);
      }
    });
    return carouselItem;
  };
  return (
    <Carousel className="product-slider" interval={null} controls={false}>
      {renderCarousel()}
    </Carousel>
  );
};

export default CarouselImages;
