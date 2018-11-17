import React, { Component } from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import vid from "./assets/portfolioBg.mp4"
import "./assets/mainBg.css";
export default class MainBg extends Component {
  render() {
    return (
      <div>
        <div id="mainBg"></div>

        <svg viewBox="0 0 410 99" version="1.1" id="mainBlueFigure1">
          <g>
            <path d="M0,97.996l0,-97.996l409.951,0l-34.42,98.617l-375.531,-0.621Z" id="mainBlueFigure2" />
            <g transform="matrix(1,0,-0.32492,1,-30.9901,0)"><text x="56.361px" y="45.773px" id="mainBlueText1">H<tspan x="65.099px 71.679px 73.917px 76.156px 82.736px 85.697px 88.659px 90.491px 100.67px 103.632px 115.252px 121.832px 127.682px 129.92px 136.5px 142.35px 145.312px 151.162px 157.742px 163.592px 169.442px 175.292px 181.872px 188.452px 191.414px 194.376px 200.956px 203.917px 210.497px 217.077px 220.039px 226.619px 233.199px 239.049px 241.287px 247.867px 253.717px 256.679px 258.917px 264.767px 267.729px 275.02px 281.6px 283.838px 286.076px 289.756px 297.776px 300.738px 307.318px 313.168px 319.018px 321.98px 330.718px 337.298px 343.148px 349.728px 351.966px 358.546px 365.126px 371.706px 375.385px 378.347px 381.309px 392.929px 399.509px " y="45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px 45.773px ">ello I&apos;m Wesley Jackson, a enthusiastic Full-Stack Developer, Web</tspan>
            </text>
            </g>
            <g transform="matrix(1,0,-0.32492,1,-25.0003,0)">
              <text x="186.467px" y="64.207px" id="mainBlueText2">&amp;<tspan x="194.488px 197.449px 206.188px 209.149px 212.111px 220.849px 228.87px 231.832px 240.57px 247.15px 253px 255.239px 261.819px 268.399px 274.979px 278.658px 281.619px 288.199px 294.779px 300.629px 307.209px 313.789px 316.751px 318.989px 325.569px 328.531px 331.493px 338.073px 344.653px 347.615px 356.353px 362.933px 365.171px 368.133px 374.713px 381.293px 384.255px 392.276px 395.237px 401.817px 404.779px 411.359px 417.209px " y="64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px 64.207px "> UI/UX Designer based in the United States.</tspan>
              </text>
            </g>
          </g>
        </svg>



        <svg viewBox="0 0 125 62" version="1.1" id="mainYellowFigure1">
          <g>
            <path d="M124.521,0l0,61.018l-124.521,0l23.819,-60.648l100.702,-0.37Z" id="mainYellowFigure2" />
            <g transform="matrix(1,0,0,1,-1549.33,-740.436)">
              <g transform="matrix(1,0,-0.32492,1,257.597,0)">
                <text x="1569.89px" y="792.801px" id="mainYellowText1">1</text>
              </g>
              <g transform="matrix(1,0,-0.32492,1,257.597,0)">
                <text x="1599.58px" y="792.801px" id="mainYellowText2">/
                <tspan x="1612.94px " y="792.801px ">4</tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>


        <Video id="vid" autoPlay loop muted controls={[]}>
          <source src={vid} type="video/mp4" />
        </Video>
      </div>
    )
  }
}
