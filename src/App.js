import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Project from './Project';
import Home from './Home';

function App() {
  return (
    <Router>
        <Routes>
        <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/:city/project/:id/:projectName"
            element={<Project />}
          ></Route>
        </Routes>
    </Router>
  );
}

export default App;
