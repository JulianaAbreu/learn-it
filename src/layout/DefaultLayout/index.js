import React from "react";
import { Route } from "react-router-dom";

import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";

import "./defaultLayout.less"

class DefaultLayout extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { Component, ...restProps } = this.props;

    return (
      <div>
        <Header />
        <div className="content-main">
          <SideMenu />
          <Route {...restProps} render={Component} />
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
