// PARENT = Hire

import React from "react";
import { Link } from "react-router-dom";

class Bio extends React.Component {
  render() {
    return (
        <section id="bio">
            <div id="container">            
        <hr/>
                <p>I provide a variety of <p id="colored">website packages</p> to choose from according to your individualized needs; please see <a href="#packages">Packages</a>.</p>
                <p>Some terms in this page may be unfamiliar to you; don't worry. <p className="clickPress">Click</p> on any <p id="underline">underlined</p> term to be <p id="colored">redirected</p> to an explanation.</p>
                <p>If you were redirected here via a sales outlet of mine, please feel free to view <Link to="/portfolio">My Portfolio</Link></p>
                <p><strong>To purchase, please</strong> inquire via one of my <a href="#contact">Contact Outlets</a> as for various reasons I do not handle e-commerce through my host.</p>
            <br/>
                <p><em>Lets work together :)</em></p>
            <br/>
        <hr/>
            </div>
        </section>
    )
  }
}

export default Bio;