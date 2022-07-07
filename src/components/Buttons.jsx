// PARENT = HEADER

import React from 'react';
import { Link } from 'react-router-dom';

class Buttons extends React.Component {
  render() {
    return (
        <div id="butCon">
            <Link to="/hire">
                <button>
                        <em><u>Hire Me</u></em>
                </button>⠀⠀
            </Link>
            <a href="#works">    
                <button>
                        Works
                </button>⠀⠀
            </a>
            <a href="#education">    
                <button>
                        Credentials
                </button>⠀⠀
            </a>
            <a href="#contact">    
                <button>
                        Contact
                </button>⠀⠀
            </a>
        </div>
    )
  }
}

export default Buttons;