import React from 'react';
import "./components/components.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './Index.jsx';
import Portfolio from "./Portfolio.jsx";
import Hire from "./Hire.jsx";
import Progmas from "./components/Progmas.jsx";

// alert("Hello! This page is still under development thus my informations are not fully filled out (certificates, credentials, testimonials, packages, etc.). It is functional and beautiful, but is not really intended for viewing; you probably didn't find this via search result. ALSO: I'm not selling websites right now,");

function App() {
  return (
  <div id="root">
    <Router>
      <Switch>
        <Route exact path="/" component={Portfolio}/>
        <Route exact path="/index" component={Index}/>
        <Route exact path="/home" component={Portfolio}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/hire" component={Hire}/>
        {/* DEMOS */}
        <Route exact path="/demos/basic/basic.html"/>
        <Route exact path="/poaepfofpmojsfapojkafskpo" component={Progmas}/>
      </Switch>
    </Router>
  </div>
    );
}

/*
<This Price=x, Size=y />
function This(props){
  display{props.Price}
}
*/

export default App;