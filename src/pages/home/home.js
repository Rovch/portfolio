import React, { Component } from 'react'
import "./assets/home.css";
import MainBg from "../../components/mainBg";
import MainNav from "../../components/mainNav";
import MainBgText from "../../components/mainBgText";
import MainBottom from "../../components/mainBottom";
import TransitionOne from "../../components/transitionOne";
export default class Home extends Component {
  render() {
    return (
      <div>
        <TransitionOne status={this.props.active} />
        <MainBottom />
        <MainBg />
        <MainNav status={this.props.status} loadFunc={this.props.loadFunc} />
        <MainBgText />

      </div>
    )
  }
}
