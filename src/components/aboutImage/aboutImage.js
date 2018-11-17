import React, { Component } from 'react'
import "./assets/aboutImage.css";
export default class AboutImage extends Component {
  render() {
    return (
      <div>
        <img id="aboutImage" src={require("./assets/FullSizeRenderOfMe.png")} />
      </div>
    )
  }
}
