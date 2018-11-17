import React, { Component } from 'react'
import "./assets/workDetails.css";
export default class WorkDetails extends Component {

  render() {

    let currentDetails;

    switch (this.props.current) {
      case "fnhub":
        currentDetails = {
          name: "FnHub",
          year: "2018",
          link: "https://github.com/Rovch/project1",
          link2: "",
          purpose: "Interactive Game Hub",
          bio: `FnHub, Standing for 'FortniteHub'. A hub allowing
          users to view and track in game statistics, communicate
          with one another with live chat, and really focus on a central
          home pertaining to the popular hit game "Fortnite".
          `}
        break;
      case "localTime":
        currentDetails = {
          name: "LocalTime",
          year: "2018",
          link: "https://github.com/Rovch/localTime",
          link2: "",
          purpose: "Travel and Meetup",
          bio: `LocalTime, travel with ease. Users are
         able to input there schedule via google calender, 
        a desired location, and activity interest. In doing so 
        a generic 'trip' is created in accordance to submitted information.
        `}
        break;
      case "huddle":
        currentDetails = {
          name: "Huddle",
          year: "2018",
          link: "https://github.com/Rovch/project1",
          link2: "https://davidvizena.github.io/project1/",
          purpose: "Travel and Meetup",
          bio: `Making meeting with friends a breeze.
        By entering multiple locations huddle is able to triangulate 
        a central location between all. Then finds near by restaurants,
        breweries and more.
        `}
        break;
      case "moneyTree":
        currentDetails = {
          name: "MoneyTree",
          year: "2018",
          link: "https://github.com/moneytrees/moneybags",
          link2: "http://money-tree.io/",
          purpose: "Financial",
          bio: `Financial planning mixed with financial 
        analytics. Link multiple bank accounts and keep track of
        transactions, financial growth, and weigh potential financial
        decisions.
        `}
        break;
      default:

    }

    let link2;
    if (currentDetails.link2 !== "") {
      link2 = <a id="webMaterial" href={currentDetails.link2} target="_blank" >
        <img id="webLink" src={require("./assets/linkImg.png")} />
        <div id="webSplitter">|</div>
        <div id="webText">Website</div>
      </a>
    }

    return (
      <div>
        <div id="linkWrapper">

          <div id="homeLink" onClick={() => this.props.loadFunc("home")}>
            <div id="homeLinkText">HOME</div>
            <div class={`home_link_false`} id="link_1_home" />
            <div class={`home_link_false`} id="link_2_home" />
            <div class={`home_link_false`} id="link_3_home" />
            <div class={`home_link_false`} id="link_4_home" />
          </div>

          {/* <div id="contactLink" onClick={() => this.props.handleSwitch()}>
            <div id="contactLinkText">CONTACT</div>
            <div class={`contact_link_false`} id="link_1_contact" />
            <div class={`contact_link_false`} id="link_2_contact" />
            <div class={`contact_link_false`} id="link_3_contact" />
            <div class={`contact_link_false`} id="link_4_contact" />
          </div> */}
        </div>



        <div id="details">
          <div id="topAngle"></div>

          <div id="row1">
            <div id="detName">{currentDetails.name}</div>
          </div>

          <div id="row2">
            <div id="yearTag"> Year:</div>
            <div id="detYear"> {currentDetails.year} </div>
            <div id="splitter">|</div>
            <div id="purposeTag">Purpose:</div>
            <div id="detPurpose"> {currentDetails.purpose}</div>
          </div>

          <div id="row3">
            <div id="detBio"> {currentDetails.bio}</div>
          </div>

          <div id="bottomAngle"></div>
        </div>


        <div id="bottomLinkWrapper">
          <a id="githubMaterial" href={currentDetails.link} target="_blank">
            <img id="githubLink" src={require("./assets/GitHub-Mark-Light-32px.png")} />
            <div id="githubSplitter">|</div>
            <div id="githubText">Github</div>
          </a>
          {link2}



        </div>


        <div id="contactHolder">
          <div id="contactEmail">| RovchBusiness@gmail.com</div>
          <div id="contactCell"> | +1 (979)-599-3231</div>
        </div>

      </div>
    )
  }
}
