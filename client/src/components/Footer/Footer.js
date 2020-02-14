import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <Row className="footer">
        <Col className="col-2 col_copyright">
          <p className="copyright">
            &copy;CopyRight {new Date().getFullYear()}.
          </p>
          <p className="copyright-reserved">All Rights Reserved.</p>
          <ul className="contact list-unstyled">
            <li className="titles">
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Headquarters:</Link>
            </li>
            <li className="adress">
              <Link to="/">
                Sed ut perspiciatis unde omnis iste natus error sit volup
              </Link>
            </li>
            <li className="contact-osf">
              <a href="mailto:contact@osf-global.com">furkan_onbasilar@hotmail.com</a>
            </li>
            <li>
              <a href="tel:+1888548-4344">+90 (507) 808 95 14 </a>
            </li>
          </ul>
        </Col>
        <Col className=" col-9">
          <Row>
            <Col className=" col-3">
              <ul className=" catagories list-unstyled">
                <li className="titles">
                  <Link to="/error"> Categoriest</Link>
                </li>
                <li>
                  <Link to="/error">Alcohol</Link>
                </li>
                <li>
                  <Link to="/error">Art</Link>
                </li>
                <li>
                  <Link to="/error">Books</Link>
                </li>

                <li>
                  <Link to="/error">Drink</Link>
                </li>
                <li>
                  <Link to="/error">Electronics</Link>
                </li>
              </ul>
            </Col>
            <Col className=" col-3 category__padding">
              <ul className="catagories list-unstyled">
                <li>
                  <Link to="/error">Home</Link>
                </li>
                <li>
                  <Link to="/error">Jewelry</Link>
                </li>
                <li>
                  <Link to="/error">Kids & Baby</Link>
                </li>
                <li>
                  <Link to="/error">Men's Fashion</Link>
                </li>
                <li>
                  <Link to="/error">Mobile</Link>
                </li>
                <li>
                  <Link to="/error">Motorcycles</Link>
                </li>
                <li>
                  <Link to="/error">Movies</Link>
                </li>
                <li>
                  <Link to="/error">Music</Link>
                </li>
              </ul>
            </Col>
            <Col className="col-3 category__padding">
              <ul className="catagories list-unstyled">
                <li>
                  <Link to="/error">Sport</Link>
                </li>
                <li>
                  <Link to="/error">Toys</Link>
                </li>
                <li>
                  <Link to="/error">Travel</Link>
                </li>
                <li>
                  <Link to="/error">Women's Fashion</Link>
                </li>
              </ul>
            </Col>
            <Col className="col-3">
              <ul className="catagories list-unstyled">
                <li className="titles">
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/error">About us</Link>
                </li>
                <li>
                  <Link to="/error">Delivery</Link>
                </li>
                <li>
                  <Link to="/error">Testimonials</Link>
                </li>
                <li>
                  <Link to="/error">Contact</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="col-1 list__col">
          <ul className="list-items">
            <li>
              <a
                target=" _blank"
                href="https://www.facebook.com/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a target=" _blank" href="https://www.google.com">
              <i className="fab fa-google"></i>
              </a>
            </li>
            <li>
              <a target=" _blank" href="https://twitter.com/onbasi_lar">
              <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
            <a target=" _blank" href="https://www.github.com/furkanonbasilar">
            <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
