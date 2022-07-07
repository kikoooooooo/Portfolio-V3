// PARENT = Index

import React from "react";
import Buttons from "./Buttons.jsx";

// Display either production/development string based on page url
/*
document.querySelector("#buildP").setAttribute("style", "display: inline; font-size: 23px;");

if(window.location.href("https://kiko-o.netlify.app/") >= 0){
  document.querySelector("#buildP").innerHTML = "(Production Build)";
}
*/
class Bio extends React.Component {
  render() {
    return (
        <section id="bio">
            <div id="container">            
        <hr/>
              <p><em>https://kiko-o.netlify.app/</em></p>
              <Buttons/>
              <small>Portfolio Version 3.0; React 18.2 | See <a href="https://github.com/kikoooooooo/Portfolio-V3" target="blank">GitHub</a></small>
            <br/>
            <br/>
        <hr/>
            </div>
        </section>
    )
  }
}

export default Bio;