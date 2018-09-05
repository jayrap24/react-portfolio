import React, { Component } from 'react';




import './About.css';

class About extends Component {
  constructor(){
    super();
    this.state = {name: "Hi"}
  }
  render() {
    return (
      <div className="containerAbout" id="aboutComponent">
        <h2 className="aboutMe">ABOUT</h2>
          <ul className="flex-container">
              <li className="flex-item-about" id="aboutItem">
              
              <span>{this.state.name}</span>
              <p>My name is Jesper. I graduated from the University of Southern California (USC) with a Bachelor in 2012. I am currently attending a Full Stack Web Development Code Bootcamp at Thinkful. For last two years I have delved into numerous languages to build web applications that I find interesting. </p>
              </li>
              <li className="flex-item-about">
              <div className="content">
                    
                        <div className="dual-col">
                            <h2>HTML</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar" id="htmlBar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>CSS</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar" id="cssBar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>JAVASCRIPT</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar" id="javascriptBar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>REACT</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar" id="reactBar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>NODE.JS</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar" id="nodeBar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>JQUERY</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar" id="jqueryBar"></div>
                            </div>
                        </div>
                        <div className="dual-col">
                            <h2>REST API</h2>
                            <div className="w3-progress-container">
                                <div className="w3-progressbar" id="restBar"></div>
                            </div>
                        </div>
                </div>

              </li>
        

          </ul>
      </div>
    );
  }
}

export default About;


