import React, { Component } from 'react'
import WorkDetails from "../workDetails";
import "./assets/workNav.css"
export default class WorkNav extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: "fnhub"
    }
    this.handleHover = this.handleHover.bind(this);
  }


  handleHover(e) {
    this.setState({
      isHovered: e
    });
    console.log(this.state.isHovered);
  }

  render() {
    let bgImage;
    switch (this.state.isHovered) {
      case "fnhub":
        bgImage = <img src={require("./assets/Screen Shot 2018-09-09 at 11.35.59 AM.png")} id="fnhubImage" />
        break;
      case "localTime":
        bgImage = <img src={require("./assets/Screen Shot 2018-09-12 at 2.18.12 PM.png")} id="localTimeImage" />
        break;
      case "huddle":
        bgImage = <img src={require("./assets/Screen Shot 2018-09-12 at 2.21.27 PM.png")} id="huddleImage" />
        break;
      case "moneyTree":
        bgImage = <img src={require("./assets/Screen Shot 2018-09-12 at 2.50.06 PM.png")} id="moneyTreeImage" />
        break;
      default:
        bgImage = <img src={require("./assets/Screen Shot 2018-09-09 at 11.35.59 AM.png")} />
    }

    return (
      <div style={{ overflow: "hidden" }}>
        <div id="workNavBg">
          <div id="workNavText">

            <div class="workNavText" id="fnhubText" onMouseEnter={() => { this.handleHover("fnhub") }}>
              <div id={this.state.isHovered != "fnhub" ? `fnhub_false` : `fnhub_true`}>FNHUB</div>
              <div id="zeroOne">01</div>
            </div>

            <div class="workNavText" id="localTimeText" onMouseEnter={() => { this.handleHover("localTime") }}>
              <div id={this.state.isHovered != "localTime" ? `localTime_false` : `localTime_true`} >LOCALTIME</div>
              <div id="zeroTwo">02</div>
            </div>

            <div class="workNavText" id="huddleText" onMouseEnter={() => { this.handleHover("huddle") }}>
              <div id={this.state.isHovered != "huddle" ? `huddle_false` : `huddle_true`}>HUDDLE</div>
              <div id="zeroThree">03</div>
            </div>

            <div class="workNavText" id="moneyTreeText" onMouseEnter={() => { this.handleHover("moneyTree") }}>
              <div id={this.state.isHovered != "moneyTree" ? `moneyTree_false` : `moneyTree_true`}>MONEYTREE</div>
              <div id="zeroFour">04</div>
            </div>

          </div>
        </div>

        <div> {bgImage}</div>

        <div id="workNavBg2">
          <WorkDetails loadFunc={this.props.loadFunc} current={this.state.isHovered} handleSwitch={() => this.props.handleSwitch()} />
        </div>
      </div>
    )
  }
}
