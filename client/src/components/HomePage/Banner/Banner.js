import React from "react";
import { Image } from "react-bootstrap";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="billboard">
      <h1>Banner Theme</h1>
      <p className="details">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium
      </p>
      <Image
        fluid
        src={require("assets/images/banner.jpg")}
        className="banner"
      />
    </div>
  );
};

export default Banner;
