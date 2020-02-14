import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import "./App.scss";
import CategoryPage from "components/CategoryPage/CategoryPage";
import MobileHeader from "components/MobileHeader/MobileHeader";
import ErrorPage from "components/ErrorPage/ErrorPage";
import ProductPage from "components/ProductPage/ProductPage";
import CartPage from "components/CartPage/CartPage";
import MediaQuery from "react-responsive";
import MobileFooter from "components/Footer/MobileFooter";
import Cookie from "components/Cookie/Cookie";
import CountdownPage from "components/CountdownPage/CountdownPage";

class App extends Component {
  state = {
    cookie: false
  };

  componentDidMount() {
    setTimeout(() => {
      if (!localStorage.getItem("flag")) {
        this.setState({ cookie: true });
      }
    }, 10000);
  }

  closeCookie = () => {
    this.setState({ cookie: false });
  };

  acceptCookie = () => {
    localStorage.setItem("flag", true);
    this.setState({ cookie: false });
  };

  render() {
    return (
      <div className="custom-container app">
        <MediaQuery maxWidth="767px">
          {isMobile => <Header isMobile={isMobile} />}
        </MediaQuery>
        <Switch>
          <Route path="/category" component={CategoryPage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/countdown" component={CountdownPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <MediaQuery maxWidth="767px">
          {isMobile => (isMobile ? <MobileFooter /> : <Footer />)}
        </MediaQuery>
        <MediaQuery maxWidth="767px">
          <MobileHeader />
        </MediaQuery>
        {this.state.cookie ? (
          <Cookie accept={this.acceptCookie} close={this.closeCookie} />
        ) : null}
      </div>
    );
  }
}

export default App;
