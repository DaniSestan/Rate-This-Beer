import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import BeerCoolerBoard from "./components/BeerCoolerBoard";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddBeer from './components/Beer/AddBeer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={BeerCoolerBoard} />

        <Route exact path="/addBeer" component={AddBeer} />
      </div>
      </Router>
    );
  }
}

export default App;
