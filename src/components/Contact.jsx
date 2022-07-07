// PARENT = MAIN

import React from "react";
import { Link } from "react-router-dom"; // Implement "click here to hire me"

import Form from "./Form";

function copyID(){
  navigator.clipboard.writeText("05753bfe45d704b9958681d75a8906dd526b3e1148a137eb12b6ab1dd8566ae348");
  const sessionString = document.getElementById("sessionString")
  sessionString.innerHTML = "(Copied!)";
}

class Contact extends React.Component {
  render() {
    return (
        <section id='contact'>
            <h1>Contact</h1>
                <hr />
                    <ul>
                        <li>
                                <h3>Email</h3>
                            <hr/>
                                <a href='mailto:kiko_oc@protonmail.com'>kiko_oc@protonmail.com</a>
                        </li>
                        <li>    
                                <h3>Fiverr</h3>
                            <hr/>
                                <a href='https://www.fiverr.com/kiko_oc' target="blank">kiko_oc</a>
                        </li>
                        <li>
                                <h3>Session</h3>
                            <hr/>
                                <p id='sessionString' onClick={copyID}>(<u>Copy ID</u>)</p>
                        </li>
                    </ul>
            <br />
            <br />
        <h2>Quick Contact</h2>
            <Form/>
          <br/>
        </section>
    )
  }
}
export default Contact;