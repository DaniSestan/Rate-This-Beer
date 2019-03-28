import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import BeerCoolerBoard from "./components/BeerCoolerBoard";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddBeer from './components/Beer/AddBeer';
import {Provider} from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={BeerCoolerBoard} />

        <Route exact path="/addBeer" component={AddBeer} />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
