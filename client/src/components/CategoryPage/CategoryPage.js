import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./CategoryPage.scss";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import PopularItems from "components/HomePage/PopularItems/PopularItems";
import FeaturedProducts from "components/HomePage/FeaturedProducts/FeaturedProducts";
import FilterButton from "components/CategoryPage/FilterButton/FilterButton";

const CategoryPage = props => {
  const [visible, setVisible] = useState(true);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });
  return (
    <div className="category category-page">
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Category Landing</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="service">Services</h1>
      {isMobile ? (
        <p className="hide" onClick={() => setVisible(!visible)}>
          Hide Filter
        </p>
      ) : null}
      {visible ? <FilterButton /> : null}
      <p className="result">
        <span>12,931</span> result in apparel
      </p>
      <PopularItems history={props.history} IsStaticItemsShown={false} />
      <FeaturedProducts tablet={isTablet} />
    </div>
  );
};

export default CategoryPage;
