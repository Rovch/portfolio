import React, { Component } from 'react'
import "./assets/mainNav.css"
export default class MainNav extends Component {
  render() {
    return (
      <div>
        <div id="mainNav"></div>

        <div id="contactDiv" onClick={() => { this.props.loadFunc("contact") }}>
          <div id="contactText">CONTACT</div>
          <div class={this.props.status != "contact" ? `contact_lines_false` : `contact_lines_true`} id="line_1_contact" />
          <div class={this.props.status != "contact" ? `contact_lines_false` : `contact_lines_true`} id="line_2_contact" />
          <div class={this.props.status != "contact" ? `contact_lines_false` : `contact_lines_true`} id="line_3_contact" />
          <div class={this.props.status != "contact" ? `contact_lines_false` : `contact_lines_true`} id="line_4_contact" />
        </div>

        <div id="worksDiv" onClick={() => { this.props.loadFunc("works") }}>
          <div id="worksText">WORKS</div>
          <div class={this.props.status != "works" ? `works_lines_false` : `works_lines_true`} id="line_1_works" />
          <div class={this.props.status != "works" ? `works_lines_false` : `works_lines_true`} id="line_2_works" />
          <div class={this.props.status != "works" ? `works_lines_false` : `works_lines_true`} id="line_3_works" />
          <div class={this.props.status != "works" ? `works_lines_false` : `works_lines_true`} id="line_4_works" />
        </div>

        <div id="aboutDiv" onClick={() => { this.props.loadFunc("about") }}>
          <div id="aboutText">ABOUT</div>
          <div class={this.props.status != "about" ? `about_lines_false` : `about_lines_true`} id="line_1_about" />
          <div class={this.props.status != "about" ? `about_lines_false` : `about_lines_true`} id="line_2_about" />
          <div class={this.props.status != "about" ? `about_lines_false` : `about_lines_true`} id="line_3_about" />
          <div class={this.props.status != "about" ? `about_lines_false` : `about_lines_true`} id="line_4_about" />
        </div>

        <div id="homeDiv" onClick={() => { this.props.loadFunc("home") }}>
          <div id="homeText">HOME</div>
          <div class={this.props.status != "home" ? `home_lines_false` : `home_lines_true`} id="line_1_home" />
          <div class={this.props.status != "home" ? `home_lines_false` : `home_lines_true`} id="line_2_home" />
          <div class={this.props.status != "home" ? `home_lines_false` : `home_lines_true`} id="line_3_home" />
          <div class={this.props.status != "home" ? `home_lines_false` : `home_lines_true`} id="line_4_home" />
        </div>

        <div id="continueDiv" onClick={() => { this.props.loadFunc("about") }}>
          <div id="continueText">Continue</div>
          <div class={this.props.status != "continue" ? `continue_lines_false` : `continue_lines_true`} id="line_1_continue" />
          <div class={this.props.status != "continue" ? `continue_lines_false` : `continue_lines_true`} id="line_2_continue" />
          <div class={this.props.status != "continue" ? `continue_lines_false` : `continue_lines_true`} id="line_3_continue" />
          <div class={this.props.status != "continue" ? `continue_lines_false` : `continue_lines_true`} id="line_4_continue" />
        </div>

        <div id="backtrackDiv" onClick={() => { this.props.loadFunc("work") }}>
          <div id="backtrackText">Backtrack</div>
          <div class={this.props.status != "backtrack" ? `backtrack_lines_false` : `backtrack_lines_true`} id="line_1_backtrack" />
          <div class={this.props.status != "backtrack" ? `backtrack_lines_false` : `backtrack_lines_true`} id="line_2_backtrack" />
          <div class={this.props.status != "backtrack" ? `backtrack_lines_false` : `backtrack_lines_true`} id="line_3_backtrack" />
          <div class={this.props.status != "backtrack" ? `backtrack_lines_false` : `backtrack_lines_true`} id="line_4_backtrack" />
        </div>

        <svg viewBox="0 0 62 235" version="1.1" id="yellowFigure1">
          <path d="M61.018,0l-61.018,0l0,234.146l61.405,-19.659l-0.387,-214.487Z" id="yellowFigure2" />
        </svg>

        <svg viewBox="0 0 62 235" version="1.1" id="blueFigure1">
          <path d="M0.386,238.146l61.019,0l0,-234.146l-61.405,19.659l0.386,214.487Z" id="blueFigure2" />
        </svg>

      </div>
    )
  }
}
