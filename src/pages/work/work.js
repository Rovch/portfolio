import React, { Component } from 'react'
import "./assets/work.css";
import WorkNav from "../../components/workNav";
import TransitionOne from "../../components/transitionOne";
import WorkContact from "../../components/workContact";
export default class Work extends Component {
  constructor() {
    super()
    this.state = {
      active: false
    }

    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleSwitch() {
    this.setState({
      active: !this.state.active
    })

    console.log(this.state.active)
  }
  render() {
    return (
      <div>
        {/* <WorkContact active={this.state.active} /> */}
        <WorkNav loadFunc={this.props.loadFunc} handleSwitch={() => this.handleSwitch()} />
        <TransitionOne status={this.props.active} />
      </div>
    )
  }
}
