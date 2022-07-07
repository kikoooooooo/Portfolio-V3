// PARENT = Header

import React from "react";
import { Link } from "react-router-dom";

class Bio extends React.Component {
  render() {
    return (
        <section id="bio">
            <div id="container">            
        <hr/>
                <p>I am an independently employed <p className="colored">web developer</p> ready to write the code for your <p className="colored">coherent</p>, <p className="colored">responsive</p>, <p className="colored">mobile-friendly</p> & <p className="colored">modern</p> website.</p>
                <p>Whatever your needs, I guarantee they will be <em>exceeded</em> with a comprehensive website curated according to your specifications.</p>
                <p>More specifically: I am a frontend developer fluent in <p className="colored">HTML</p>, <p className="colored">CSS</p>, <p className="colored">JavaScript</p>, <p className="colored">React</p>, and <p className="colored">Python</p>; please view my <a href="#education">Credentials</a>.</p>
                <p>To see my portfolio please <p className="clickPress">Click</p> one of the buttons located below &darr;</p>
                <p>Or for hiring information, please see my <Link to={"/hire"}>Hiring Info</Link>.</p>
            <br/>
        <hr/>
            </div>
        </section>
    )
  }
}

export default Bio;