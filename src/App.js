import React, { Component } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers';

import DefautLayout from "./layout/DefaultLayout";
import MainPage from "./pages/MainPage";

import "./assets/styles/reset.less"
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
class App extends Component {
  render() {
    return (

      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <DefautLayout exact path="/students" component={MainPage} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
