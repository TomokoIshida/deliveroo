import React from "react";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/restaurant" component={Restaurant} />
        </div>
      </Router>
    );
  }
}

export default App;
