import React from "react";
import MainSlider from "./MainSlider/MainSlider";
import PopularItems from "./PopularItems/PopularItems";
import { useMediaQuery } from "react-responsive";
import PopularSlider from "components/HomePage/PopularSlider/PopularSlider";
import "./HomePage.scss";
import FeaturedProducts from "components/HomePage/FeaturedProducts/FeaturedProducts";
import Banner from "components/HomePage/Banner/Banner";
import BenefitsContent from "components/HomePage/BenefitsContent/BenefitsContent";

const HomePage = props => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return (
    <div className="homepage">
      <MainSlider mobile={isMobile} />
      <div style={{ backgroundColor: "#262a32" }}>
        {isMobile ? (
          <PopularSlider history={props.history} />
        ) : (
          <PopularItems history={props.history} isStaticItemsShown={true} />
        )}
      </div>
      <Banner />
      <FeaturedProducts tablet={isTablet} />
      <BenefitsContent />
    </div>
  );
};

export default HomePage;
