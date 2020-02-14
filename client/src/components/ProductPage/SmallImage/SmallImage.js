import React from "react";
import { Image } from "react-bootstrap";
import "./SmallImage.scss";

const SmallImage = props => {
  const onClickHandler = () => {
    props.setActiveIndex();
  };
  return (
    <Image
      className={
        props.selected === props.specialKey ? "selected-image" : "small-image"
      }
      width="70px"
      height="70px"
      onClick={onClickHandler}
      src={props.imageUrl}
    />
  );
};

export default SmallImage;
