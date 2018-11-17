import React, { Component } from 'react'
import AboutBg from "../../components/aboutBg";
import AboutTextLayer from "../../components/aboutTextLayer";
import AboutImage from "../../components/aboutImage";
import TransitionOne from "../../components/transitionOne";
export default class About extends Component {
  render() {
    return (
      <div>
        <TransitionOne status={this.props.active} />
        <AboutBg />
        <AboutTextLayer loadFunc={this.props.loadFunc} />
        <AboutImage />
      </div>
    )
  }
}
