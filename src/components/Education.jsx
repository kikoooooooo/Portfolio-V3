// PARENT = MAIN
/*
    Mobile: implement onclick with the same features that are hover on computer.
*/
import React from "react";

class Education extends React.Component {
  render() {
    return (
    <section id="education">
    <h1>Credentials</h1>
        <hr />
            <ul>
                {/*
                <li>
                    <h3>JavaScript</h3>
                        <hr />
                            <img src="https://www.sololearn.com/Certificate/1162-26157138/jpg" alt="Click here to view my certification in Responsive Web Development"/>
                </li>
                <li>
                    <h3>React + Redux</h3>
                        <hr />
                        <img src="https://www.sololearn.com/Certificate/1162-26157138/jpg" alt="Click here to view my certification in Responsive Web Development"/>
                </li>
                <li>
                    <h3>Python</h3>
                        <hr />
                            <img src="https://www.sololearn.com/Certificate/1162-26157138/jpg" alt="Click here to view my certification in Responsive Web Development"/>
                </li>
                */}
                <li>
                    <h3>Responsive Design</h3>
                        <hr />
                            <img src="https://www.sololearn.com/Certificate/1162-26157138/jpg" alt="Click here to view my certification in Responsive Web Development"/>
                </li>
                {/*
                <li>
                    <h3>Python (for finance)</h3>
                        <hr />
                            <img src="https://www.sololearn.com/Certificate/1162-26157138/jpg" alt="Click here to view my certification in Responsive Web Development"/>
                </li>
                */}
            </ul>
        <br />
            <br />
            <br />
    </section>
    )
  }
}

export default Education;