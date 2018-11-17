import React, { Component } from 'react'
import "./assets/transitionOne.css";
export default class TransitionOne extends Component {
  render() {
    return (
      <div>

        <div id={`loading_bg_${this.props.status}`}></div>
        <div id={`loading_bg_${this.props.status}_2`}></div>
        <div id={`loading_bg_${this.props.status}_3`}>
          <div class="loading">
            <div class={`loading-text-${this.props.status}`}>
              <span class="loading-text-words">L</span>
              <span class="loading-text-words">O</span>
              <span class="loading-text-words">A</span>
              <span class="loading-text-words">D</span>
              <span class="loading-text-words">I</span>
              <span class="loading-text-words">N</span>
              <span class="loading-text-words">G</span>
            </div>
          </div></div>
        <div id={`loading_bg_${this.props.status}_4`}></div>
        <div id={`loading_bg_${this.props.status}_5`}></div>

      </div>
    )
  }
}
