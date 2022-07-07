// PARENT = HEADER

import React from 'react';
import { Link } from 'react-router-dom';

class Buttons extends React.Component{
  render() {
    return (
        <div id="iButCon">
              <Link to="/portfolio">
                <button>
                  Portfolio
                </button>
              </Link>
            <br/>
              <Link to="/hire">
                  <button>
                    Hiring Info
                  </button>
              </Link>
        </div>
    )
  }
}

export default Buttons;