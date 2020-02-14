import React, { Fragment } from "react";
import Item from "components/HomePage/PopularItems/Item";
import { Row, Col, Carousel } from "react-bootstrap";
import "./SpecialItems.scss";
import { useMediaQuery } from "react-responsive";

const SpecialItems = ({ data, history }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });

  const renderProducts = () => {
    return data.map((product, index) => (
      <Carousel.Item>
        <Item history={history} key={index.toString()} data={product} />
      </Carousel.Item>
    ));
  };
  return (
    <div>
      <h1 className="special-header">Popular Items</h1>
      {isMobile ? (
        <Carousel controls={false} className="mobile__special">
          {renderProducts()}
        </Carousel>
      ) : (
        <Row className="special-row">
          {data.map(product => (
            <Col>
              <Item data={product} history={history} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default SpecialItems;
