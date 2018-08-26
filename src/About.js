import React, { Component } from 'react';
import Icon from 'react-fa';


import './About.css';

class Navigation extends Component {
  constructor(){
    super();
    this.state = {name: "Hi"}
  }
  render() {
    return (
      <div className="containerAbout">
        <h2 className="myProjects">ABOUT</h2>
          <ul className="flex-container">
              <li className="flex-item-about" id="aboutItem">
              
              <span>{this.state.name}</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </li>
              <li className="flex-item-about">
              <div className="content">
                    
                        <div className="dual-col">
                            <h2>HTML</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>CSS</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>JAVASCRIPT</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>REACT</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>NODE.JS</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>JQUERY</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>REST API</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar"></div>
                            </div>
                        </div>
                </div>

              </li>
        

          </ul>
      </div>
    );
  }
}

export default Navigation;


