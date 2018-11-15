import React, { Component } from "react";
import RestaurantItem from "./components/RestaurantItem";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
​
class App extends Component {
 render() {
  return (
   <Router className="App">
    <div>
     <NavBar />
     <Route exact path="/" component={Home} />
     <Route path="/restaurant" component={RestaurantItem} />
    </div>
   </Router>
  );
 }
}
​
export default App;