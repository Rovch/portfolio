import React, { Component } from 'react'
import "./assets/aboutTextLayer.css"
export default class AboutTextLayer extends Component {
  render() {
    return (
      <div>
        <div id="leftTab" onClick={() => { this.props.loadFunc("home") }}></div>
        <div id="leftTabText">HOME</div>


        <div id="rightTab" onClick={() => { this.props.loadFunc("works") }}>
        </div>
        <div id="rightTabText1">WORK</div>




        <div id="skills">
          <div class="skillsText" id="js">Javascript</div>
          <div class="skillsText" id="react">React.js</div>
          <div class="skillsText" id="jquery">Jquery</div>
          <div class="skillsText" id="express">Express.js</div>
          <div class="skillsText" id="node">Node.js</div>
          <div class="skillsText" id="mongo">MongoDb </div>
          <div class="skillsText" id="sql">SQL </div>
        </div>

        <div id="social">
          <div id="github"> <a href="https://github.com/Rovch" target="_blank"> Github</a></div>
          <div id="linkedin"><a href="https://www.linkedin.com/in/wesley-jackson-6a842014a/" target="_blank"> LinkedIn</a></div>
          <div id="instagram"><a href="https://www.instagram.com/rovchh/?hl=en" target="_blank"> Instagram </a></div>
        </div>

        <div id="copyright">COPYRIGHT © 2018 WESLEY JACKSON </div>
        <div id="name"> Wesley T. Jackson</div>
        <div id="trade"> Full-stack Web Developer</div>
        <div id="est"> 2017</div>

        <div id="paragraph"> I’m a web developer living in Houston, Texas. I spend my days with my hands in many different areas of web development from back end programming (sql, mongo, express, and node) to front end engineering (HTML, CSS, jQuery/Javascript, React, and handlebars ), digital accessibility, user experience and visual design.
        I’m extremely passionate about web development and design in all it’s forms and helping small businesses improve their online presence. Aside from web development, I enjoy spending my time with my girlfriend, working on my cars, building pcs, and taking photos.
        </div>
      </div>
    )
  }
}
