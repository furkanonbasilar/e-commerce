import React from "react";
import { Link } from "react-router-dom";
import "./MobileHeader.scss";
import { Search, Profile, Heart, Bag } from "assets/icons/MobileHeaderSvg";
import { Badge } from "react-bootstrap";
import { connect } from "react-redux";

const MobileHeader = ({ wishListQuantity, productQuantity }) => {
  return (
    <div className="header">
      <ul className="navigation">
        <li>
          <Link to="/category">
            <Search />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Profile />
          </Link>
        </li>
        <li>
          <Link className="mobile-alerts" to="/">
            <Heart />
            <Badge className="rounded-circle" variant="success">
              {wishListQuantity}
            </Badge>
          </Link>
        </li>
        <li>
          <Link className="mobile-alerts" to="/cart">
            <Bag />
            <Badge className="rounded-circle" variant="success">
              {productQuantity}
            </Badge>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productQuantity: state.cart.productIDs.length,
    wishListQuantity: state.wishList.wishIDs.length
  };
};
export default connect(mapStateToProps)(MobileHeader);
