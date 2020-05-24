import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

import MainNav from "./components/Nav"
import SavedPage from "./pages/saved"

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainNav} />
      {/* <Route exact path="/search" component={}/> */}
      <Route exact path="/saved" component={SavedPage} />
    </Router>
  );
}

export default App;