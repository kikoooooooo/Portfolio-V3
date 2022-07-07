// PARENT = MAIN; DO A BUNCH OF WORK ON THIS

import React from "react";

function PCopyID(){
  navigator.clipboard.writeText("05753bfe45d704b9958681d75a8906dd526b3e1148a137eb12b6ab1dd8566ae348");
  const sessionString = document.getElementById("sessionString");
  sessionString.innerHTML = "(Copied!)";
};

class PContact extends React.Component {
  render() {
    return (
        <div id='contact'>
            <h1>Contact</h1>
                <hr />
                    <h3>Email</h3>
                        <a href='mailto:kiko_oc@protonmail.com'>kiko_oc@protonmail.com</a>
                    <h3>Fiverr</h3>
                        <a href='https://www.fiverr.com/kiko_oc' target="blank">kiko_oc</a>
                    <h3>Session</h3>
                        <p id='sessionString' /*onClick={PCopyID()}*/>(Copy ID)</p>
        </div>
    )
  }
}
export default PContact;