import React, { Component } from 'react';
import Chart from './components/chart';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import "./styles/App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

    return (
      <div className='bodyContent'>   
        <Router>  
        <Navbar />
          <Switch>
          <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Chart />
            </Route>
            <Route path="/contact">
            <Contact />
            </Route>
           
          </Switch>
  
        </Router>
       
      </div>

    );
  
}

export default App;
