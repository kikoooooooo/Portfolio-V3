import React from "react";
import { Link } from "react-router-dom";

import gearS from "../images/settingsA.svg";
import gearL from "../images/settingsB.svg";

/*
import gearS from "../images/settingsA.svg"
import gearL from "../images/settingsB.svg"
*/

// Dyanmic Assignments on Document Open
document.documentElement.style.setProperty("--HighlightColor", "lightblue");
// Close Settings Component on Window Click (close animation)
window.onclick = (event) => {
    if (!event.target.matches('#settingBut')) {
        document.querySelector("#settingBut").setAttribute("style", "width: 6rem;");
        document.querySelector("#settingDropdown").setAttribute("style", "width: 0rem; height: 3.1rem;");
    }
};
// Working on This \
/*
document.getElementById("settingDropdown").addEventListener('click', function (event) {
    event.stopPropagation();
});
*/

// Open Settings Component On Click (open animation)
var settingActivated = 0;

function settingFunc() {

    settingActivated++;

    if (settingActivated%2===0) {
        document.querySelector("#settingBut").setAttribute("style", "width: 6rem; transition: .7s;");
        document.querySelector("#settingBut").style.backgroundImage = `url(${gearS})`;
            document.querySelector("#settingDropdown").setAttribute("style", "width: 0rem; height: 3.1rem;");
    } else {
        document.querySelector("#settingBut").setAttribute("style", "width: 10rem; background-size: 30%; transition: .7s;");
        document.querySelector("#settingBut").style.backgroundImage = `url(${gearL})`;
          document.querySelector("#settingDropdown").setAttribute("style", "width: 7rem; height: 3.1rem;");
    }
  }

// Change to Legacy Font
// >comments are deprecated code
var fontActivated = 0;

function legacyFont() {
    fontActivated++;
    //alert("Some elements will not appear as intended.");

    if (fontActivated%2===0) {
        document.querySelector("#root").style.fontFamily = "'Times New Roman', Times, serif";
      fontActivated = false
      } else {
        document.querySelector("#root").style.fontFamily = "BIZUD-Gothic";
      fontActivated = true
    }

    /*
    if (legacyFont = true){
      console.log("true")
    } else {
      console.log("false")
    }
    */
}

// Open "Developer Mode" Windows
// >requires disabled popups
var winCount = 0

function devWindows() {
    window.open("https://github.com/kikoooooooo/Portfolio-V3", "blank");
    winCount++
    while(winCount=1){
        window.open("https://app.netlify.com/sites/kiko-o/deploys");
        winCount++
        if(winCount>1){break;}
    };
}

// Change Highlights to Alternate/Legacy Highlights
//  \ DEPRECATED \
/*
var altActivated = 0;

function altHighlights() {
    altActivated++
    if (altActivated%2===0) {
      document.documentElement.style.setProperty("--HighlightColor", "lightblue")
    } else {
      document.documentElement.style.setProperty("--HighlightColor", "salmon");
    }
}
*/

class Settings extends React.Component {
  render() {
    return (
      <div id="settings">
        <button id="settingBut" onClick={settingFunc}>
            {/*
            <motion.img 
                animate={isRotating ? "rotate" : "stopped"}
                variants={variants}
                src={gearS}
            >
            </motion.img>
            */}
        </button>
        <div id="settingDropdown">
          <button onClick={devWindows}>Developer<br/>Mode</button>
          <Link to="/index"><button>Indexed<br/>View</button></Link>
          <button onClick={legacyFont}>Legacy<br/>Font</button>
          {/*<button onClick={altHighlights}>Legacy<br/>Highlights</button>*/}
        </div>
      </div>
    )
  }
}

export default Settings;