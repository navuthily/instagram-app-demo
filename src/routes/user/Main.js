import React from 'react';
import Home from '../../components/User/Main/Home'
import Post from '../../components/User/Main/Post'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Main() {
  return (
    <div className="View">
      <Router>
      <div>
          <Switch>
        <Route path="/about" exact component ={About}>
            
        </Route>
        <Route path="/" exact component ={Home}>
            <Home />
        </Route>     
        <Route path="/add" exact component ={Post}>
        </Route>     
        </Switch>
      </div>
    </Router>
    </div>
  );
}
function About() {
  return <h2>About</h2>;
}

export default Main;
