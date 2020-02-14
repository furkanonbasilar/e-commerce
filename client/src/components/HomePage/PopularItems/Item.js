// @ts-nocheck
import React, { useState, Fragment } from "react";
import { Card, Image } from "react-bootstrap";
import { Like, Plus } from "assets/icons/PopularItemsSvg";
import "./Item.scss";
import Images from "assets/res/images";
import { addProduct } from "components/redux/cart/action";
import { connect } from "react-redux";
import { incrementTotalPrice } from "components/redux/totalPrice/action";
import { addWishList } from "components/redux/wishlist/action";

const Item = ({
  data,
  history,
  addProduct,
  incrementTotalPrice,
  addWishList
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderPrice = () => {
    return <Card.Text style={{ marginTop: "10px" }}> $ {data.price}</Card.Text>;
  };

  const routeHandler = () => {
    if (data.url === "/countdown") {
      return history.push("/countdown");
    }
    if (data.url !== "") {
      return history.push("/product");
    }
  };

  const renderButton = (id, price) => {
    return (
      <Card.Text>
        <button className="price">{price ? data.price + " $" : "FREE"}</button>
        <button
          className="buy-now"
          onClick={() => {
            addProduct(id);
            incrementTotalPrice(price, 1);
          }}
        >
          BUY NOW
        </button>
      </Card.Text>
    );
  };

  const renderStatic = () => {
    return (
      <Card>
        <div className="static-card" />
        <Card.Img variant="top" width="100%" height="100%" src={data.img} />
        <div className="absolute-text">
          <p className="w-50 text-white">
            My Dragons are misbehaving again. Unbeliviable
          </p>
          <div className="d-flex align-items-end">
            <Image src={Images.layer} />
            <p className="time">5H Ago</p>
          </div>
        </div>
      </Card>
    );
  };

  const renderOverlay = (id, price) => {
    return isHovered ? (
      <Fragment>
        <div className="hover-card" />
        <button
          className="my-button green centered-buttons"
          onClick={() => {
            addProduct(id);
            incrementTotalPrice(price, 1);
          }}
        >
          <Plus />
        </button>
        <button
          onClick={() => addWishList(id)}
          className="my-button red centered-buttons"
        >
          <Like />
        </button>
      </Fragment>
    ) : null;
  };

  const onHover = () => {
    if (data.url === "" && data.price !== null) setIsHovered(!isHovered);
  };

  return (
    <Fragment>
      {data.url === "" && !data.price ? (
        renderStatic()
      ) : (
        <Card onMouseEnter={onHover} onMouseLeave={onHover}>
          {renderOverlay(data.id, data.price)}

          <Card.Img
            onClick={routeHandler}
            variant="top"
            width="100%"
            height="70%"
            src={data.img}
          />
          <Card.Body>
            <Card.Title onClick={routeHandler} className="title">
              {data.price ? (
                data.name
              ) : (
                <span className="free_item">{data.name}</span>
              )}
            </Card.Title>
            {data.url !== ""
              ? renderButton(data.id, data.price)
              : renderPrice()}
          </Card.Body>
        </Card>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = {
  addProduct,
  incrementTotalPrice,
  addWishList
};

export default connect(null, mapDispatchToProps)(Item);
