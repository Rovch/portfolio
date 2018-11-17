import React, { Component } from 'react'
import "./assets/mainBgText.css";
export default class MainBgText extends Component {
  render() {
    return (
      <div>
        <div class="mainBgTextFlexBox" id="interactiveDiv">
          <div class="mainBgText"> INTERACTIVE</div>
          <div>
            <svg viewBox="0 0 13 54" version="1.1" class="textLine" >
              <path d="M12.217,0.391l-2.052,-0.391l-10.165,53.334l2.052,0.391l10.165,-53.334Z" class="textLineBlue" />
            </svg>
          </div>
        </div>

        <div class="mainBgTextFlexBox" id="designerDiv">
          <div class="mainBgText" id="designer" >DESIGNER</div>
          <div>
            <svg viewBox="0 0 13 54" version="1.1" class="textLine" >
              <path d="M12.217,0.391l-2.052,-0.391l-10.165,53.334l2.052,0.391l10.165,-53.334Z" class="textLineYellow" />
            </svg>
          </div>
        </div>

        <div class="mainBgTextFlexBox" id="andDiv">
          <div class="mainBgText" >&</div>
          <div>
            <svg viewBox="0 0 13 54" version="1.1" class="textLine" >
              <path d="M12.217,0.391l-2.052,-0.391l-10.165,53.334l2.052,0.391l10.165,-53.334Z" class="textLineBlue" />
            </svg>
          </div>
        </div>

        <div class="mainBgTextFlexBox" id="webDiv">
          <div class="mainBgText" >WEB</div>
          <div>
            <svg viewBox="0 0 13 54" version="1.1" class="textLine" >
              <path d="M12.217,0.391l-2.052,-0.391l-10.165,53.334l2.052,0.391l10.165,-53.334Z" class="textLineYellow" />
            </svg>
          </div>
        </div>

        <div class="mainBgTextFlexBox" id="developerDiv">
          <div class="mainBgText" >DEVELOPER</div>
          <div>
            <svg viewBox="0 0 13 54" version="1.1" class="textLine" >
              <path d="M12.217,0.391l-2.052,-0.391l-10.165,53.334l2.052,0.391l10.165,-53.334Z" class="textLineBlue" />
            </svg>
          </div>
        </div>

      </div>
    )
  }
}
