import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faGraduationCap } from '@fortawesome/fontawesome-free-solid';
import { faListUl } from '@fortawesome/fontawesome-free-solid';
import {faMale} from '@fortawesome/fontawesome-free-solid'
import {faBuilding} from '@fortawesome/fontawesome-free-solid';

import "./sideMenu.less";


class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsMenu: [
        {
          image: faGraduationCap,
          name: "Estudantes",
          goTo: ""
        },
        {
          image: faMale,
          name: "Professores",
          goTo: ""
        },
        {
          image: faBuilding,
          name: "Salas",
          goTo: ""
        },
        {
          image: faListUl,
          name: "Matérias",
          goTo:""
        }
      ]
    };
  }

  onCLickOption = () => {
   const hover= "hover";
   return hover;
  }

  render() {
    const { itemsMenu } = this.state;

    return (
      <div className="menu-left">
        <div className="logo">LearnIt</div>
        {itemsMenu.map((item, index) => (
          <div className="side-menu"  key={index} onClick={this.onCLickOption}>
            <span className="ic-option"> <FontAwesomeIcon icon={item.image} /> </span>
            <span className="name-option"> {item.name} </span>
          </div>
        ))}
      </div>
    );
  }
}

export default SideMenu;
