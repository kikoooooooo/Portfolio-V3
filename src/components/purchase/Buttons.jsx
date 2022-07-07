//PARENT = HEADER
/*
    Edit the home button so that its the width of all the 4 link buttons
*/
import React from 'react';
import { Link } from 'react-router-dom';

class Buttons extends React.Component {
  render() {
    return (
        <div id="butCon">
            <a href="#packages">    
                <button>
                        Packages
                </button>⠀⠀
            </a>
            <a href="#testimonials">    
                <button>
                        Testimonials
                </button>⠀⠀
            <a href="#faq">    
                <button>
                        FAQ
                </button>⠀⠀
            </a>
            </a>
            <a href="#contact">    
                <button>
                        Contact
                </button>⠀⠀
            </a>
        <br/>
        <br/>
            <Link to={"/"}>
                <button id="homeBut">
                        Return to Portfolio
                </button>⠀⠀
            </Link>
        </div>
    )
  }
}

export default Buttons;