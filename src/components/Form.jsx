// PARENT = Contact Section

import React from "react";

class Form extends React.Component {
  render() {
    return (
        <div id="formCon">
            <form id="contactForm" method="POST" data-netlift="true">
            <br/>
            <textarea placeholder=" Message" name="textinput" id="message" required></textarea>
                <div id="nameCon">
                        <input name="name" id="email" type="text" placeholder="Name" required/>
                </div>
            <br/>
            <br/>
            <br/>
                <div id="emailCon">
                        <input name="email" id="email" type="email" placeholder="Email" required/>
                </div>
                <br/>
            <br/>
            <button id="submit" type="submit" for="contactForm">Send</button>
            <br/>
            <br/>
            </form>
        </div>
    )
  }
}

export default Form;