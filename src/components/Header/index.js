import React, { Component } from "react";
import { Icon } from "antd";

import "./header.less";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="options-header">
          <Icon type="search" className="ic-search"/>
          <Icon type="bell" className="ic-bell"/>
        </div>
        <div className="user-header">
          <span>Bem vinda, Lise</span>
          <Icon type="caret-down" className="ic-caret-down" />
        </div>
      </div>
    );
  }
}

export default Header;
