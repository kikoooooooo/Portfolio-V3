// PARENT = MAIN

import React from "react";

import Basic1 from "../../images/basic/1.png"
/*
function enlargeBasic(id) {
  document.querySelector(id).setAttribute("style", "transform: scale(2, 2); transition: 1s; padding-right: 19.5rem;");
}

function delargeBasic(ele) {
  var id = ele.id
  document.querySelector(id).setAttribute("style", "transform: scale(1); transition: 1s;");
}

var enlarger = 0;

function basicLoop() {
  
  enlarger++;
  
  if (enlarger%2===0){
    document.querySelector("#basic").setAttribute("style", "transform: scale(1); transition: 1s;");
    document.querySelector("#basicList").setAttribute("style", "visibility: show; transition: .5s;");
  } else {
    document.querySelector("#basic").setAttribute("style", "transform: scale(2, 2); transition: 1s; padding-right: 19.5rem;");
    //document.querySelector("#basicList").setAttribute("style", "visibility: hidden; transition: .5s;");
  }
}
*/
class Packages extends React.Component {
  render() {
    return (
    <section id="packages">
      <h1>Packages</h1>
        <div id="container">
            <hr />
              <div className="basicCon">
                <h2>Influencer / $50</h2>
                    <h4>
                        Intended for personal websites acting as a social landing page/interests page.
                    </h4>
                <ul id="basicList">
                    <li>Up to 4 Inline Sections (1 page)</li>
                    <li>Customizable & Responsive Styling <small>(provide me your images)</small></li>
                    <li>Navigation Menu (hamburger)</li>
                    <li>Content Embed (music, video, etc.)</li>
                    <li>Social Media</li>
                    <li>Contact Information</li>
                    <li>Custom Section</li>
                </ul>
              <br/>           
              </div>
            <hr id="priceline"/>
                <h2>Basic / $150</h2>
                    <h4>
                        A website intended to be a professional portfolio <a href="https://mailchimp.com/marketing-glossary/landing-pages/">landing page</a>.
                    </h4>
                <ul>
                    <li><em>Everything in the Influencer Package</em> <strong>Plus:</strong></li>
                    <li>Up to 8 100% Width Sections (1 page)</li>
                    <li>Modern Styling</li>
                    <li>Top Navigation+Hamburger Menu</li>
                    <li>Product Information Page</li>
                    <li>References/Testimonials</li>
                    <li>Product Page(s)</li>
                </ul>
              <br/>
            <hr id="priceline" />
                <h2>Standard / $200</h2>
                    <h4>
                        A full featured website intended for organizations or small businesses geared & styled in a more professional manner.
                    </h4>
                    {/*<h5>If it concerns you, please contact me about NFT Landing Pages</h5>*/}
                <ul>
                    <li><em>Everything in the Basic Package</em> <strong>Plus:</strong></li>
                    <li>Up to 3 Web Pages</li>
                    <li>Up to 4 Sections Per Page</li>
                    <li>Professional Styling</li>
                    <li>Top+Bottom Navigation</li>
                    <li>Interactive Photo Gallery</li>
                    <li>Location/Map Embed <small>(service of your choice)</small></li>
                    <li>Contact Form</li>
                    <li>Newsletter (in site)</li>
                </ul>
              <br/>
            <hr id="priceline" />
                <h2>Industry / $300</h2>
                    <h4>
                        A professional website directory intended for companies, businesses & larger organizations looking to establish a web-presence.
                    </h4>
                <ul>
                    <li><em>Everything in the Standard Package</em> <strong>Plus:</strong></li>
                    <li>Template <a href="https://www.simplilearn.com/tutorials/programming-tutorial/what-is-backend-development#:~:text=Backend%20developers%20build%20code%20that,what%20you%20don't%20see.">Backend</a> developed with <a href="https://www.tutorialspoint.com/reactjs/reactjs_overview.htm">React</a></li>
                    <li>Up to 5 Web Pages</li>
                    <li>Professional & Consumer Friendly Styling/Branding</li>
                    <li><a href="https://www.britishlogodesign.co.uk/i-like-to-move-it-dynamic-elements-on-websites/#:~:text=Dynamic%20website%20elements%20are%20anything,website%20could%20be%20made%20dynamic)." target="blank">Dynamic</a> Page Elements</li>
                    <li>Interactive Photo Gallerie(s)</li>
                    <li>Newsletter (email)</li>
                </ul>
              <br/>
            <hr id="priceline" />
                <h2>Premium / $500</h2>
                    <h4>
                        A premium <a href="https://medium.com/@essentialdesign/website-vs-web-app-whats-the-difference-e499b18b60b4" target="blank">web-app</a> intended for companies or larger businesses seeking a professional corporate website.
                    </h4>
                <ul>
                    <li><em>Everything in <strong>All Packages</strong></em> <strong>Plus:</strong></li>
                    <li>Custom Backend developed with React</li>
                    <li>Up to 10 Web Pages <small>(<em>unlimited</em> sections)</small></li>
                    <li>Industry Web-Designer Level Styling+Page Animation</li>
                    <li>1 on 1 Regarding Creation Specifications and Intent</li>
                </ul>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            <hr/>
        </div>
    </section>
    )
  }
}

export default Packages;