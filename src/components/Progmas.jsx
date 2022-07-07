import React from "react"

import warai from "../images/Screenshot 2022-07-06 153907.png"

class Progmas extends React.Component {
  render() {
    return (
      <img src={warai} alt="warai" style={{transform: "scale(5)", paddingTop: "8.5rem"}}></img>
    )
  }
}

export default Progmas;