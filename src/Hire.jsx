import React from 'react';

import Settings from './components/Settings';

import Top from './components/purchase/Top';
import Bio from './components/purchase/Bio';
import Buttons from './components/purchase/Buttons';
import Packages from './components/purchase/Packages.jsx';
import FAQ from './components/purchase/FAQ.jsx';
import Contact from './components/purchase/Contact.jsx';
import Footer from './components/Footer';

const Hire = () => {
    return(
        <body>
            <div id="top"/>
              <Settings/>
                <header>
                    <Top/>
                    <Bio/>
                    <Buttons/>
                </header>
                <main>
                    <Packages/>
                    <FAQ/>
                    <Contact/>
                </main>
              <br/>
            <a href="#top">
              <button id="bottomBut">Back to Top</button>
            </a>
            <br/>
                <footer>
                    <Footer />
                </footer>
        </body>
    );
}

export default Hire;