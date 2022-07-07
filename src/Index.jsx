import React from 'react';

import Settings from './components/Settings.jsx';

import Top from './components/index/Top.jsx';
import Bio from './components/index/Bio.jsx'
import Education from './components/Education';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

var birthDate = new Date("April 21")

const Index = () => {
    return (
        <body>
            <div id="top"/>
            <Settings/>
                <header id="long">
                        <Top/>
                        <Bio/> {/*contains buttons*/}
                </header>
        </body>
    );
}

export default Index;