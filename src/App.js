import React, { Component } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import DefautLayout from "./layout/DefaultLayout";
import MainPage from "./pages/MainPage";

import "./assets/styles/reset.less"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <DefautLayout exact path="/students" component={MainPage}/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
