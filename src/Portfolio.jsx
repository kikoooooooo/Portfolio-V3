import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Settings from './components/Settings.jsx';

import Top from './components/Top.jsx';
import Bio from './components/Bio.jsx';
import Buttons from './components/Buttons';
import Education from './components/Education';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

var birthDate = new Date("April 21")

const Portfolio = () => {
    return (
        <body>
            <div id="top"/>
            <Settings/>
                <header>
                        <Top/>
                        <Bio/>
                        <Buttons/>
                </header>
                <main>
                        <Works/>
                    <br/>
                        <Education />
                    <br/>
                        <Contact/>
                </main>
            <a href="#top">
                <button id="bottomBut">Back to Top</button>
            </a>
            <br/>
            <br/>
                <footer>
                    <Footer />
                </footer>
        </body>
    );
}

export default Portfolio;