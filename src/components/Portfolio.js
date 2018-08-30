import React, { Component } from 'react';
import $ from 'jquery';

import './Portfolio.css';

class Portfolio extends Component {
    componentDidMount = () => {
        $(document).ready(function(){
            //first project
            $("#firstFlex").hover(function(){
                $("#firstWebsiteContainer").fadeOut().css("display", "none");
                $("#firstWebsiteInfo").fadeIn().css("display", "block");
                $("#firstWebsiteInfo p").fadeIn().css("display", "block");
                $("#firstWebsiteInfo .demo").fadeIn().css("display", "block");
                $("#firstWebsiteInfo .githubCode").fadeIn().css("display", "block");
            },
            function(){
               $("#firstWebsiteContainer").fadeIn().css("display", "block");
               $("#firstWebsiteInfo").fadeOut().css("display", "none");
               $("#firstWebsiteInfo p").fadeOut().css("display", "none");
               $("#firstWebsiteInfo .demo").fadeOut().css("display", "none");
                $("#firstWebsiteInfo .githubCode").fadeOut().css("display", "none");
            }
        );
           //second project
            $("#secondFlex").hover(function(){
                $("#secondWebsiteContainer").fadeOut().css("display", "none");
                $("#secondWebsiteInfo").fadeIn().css("display", "block");
                $("#secondWebsiteInfo p").fadeIn().css("display", "block");
                $("#secondWebsiteInfo .demo").fadeIn().css("display", "block");
                $("#secondWebsiteInfo .githubCode").fadeIn().css("display", "block");
            },
            function(){
            $("#secondWebsiteContainer").fadeIn().css("display", "block");
            $("#secondWebsiteInfo").fadeOut().css("display", "none");
            $("#secondWebsiteInfo p").fadeOut().css("display", "none");
            $("#secondWebsiteInfo .demo").fadeOut().css("display", "none");
                $("#secondWebsiteInfo .githubCode").fadeOut().css("display", "none");
            }
    );


      //third project
      $("#thirdFlex").hover(function(){
        $("#thirdWebsiteContainer").fadeOut().css("display", "none");
        $("#thirdWebsiteInfo").fadeIn().css("display", "block");
        $("#thirdWebsiteInfo p").fadeIn().css("display", "block");
        $("#thirdWebsiteInfo .demo").fadeIn().css("display", "block");
        $("#thirdWebsiteInfo .githubCode").fadeIn().css("display", "block");
    },
    function(){
    $("#thirdWebsiteContainer").fadeIn().css("display", "block");
    $("#thirdWebsiteInfo").fadeOut().css("display", "none");
    $("#thirdWebsiteInfo p").fadeOut().css("display", "none");
    $("#thirdWebsiteInfo .demo").fadeOut().css("display", "none");
        $("#thirdWebsiteInfo .githubCode").fadeOut().css("display", "none");
    }
);



        });
    }


  render() {
    return (
        <div className = "containerPortfolio">
        <h2 className="myPortfolio">MY PROJECTS</h2>
            <ul className="flex-container">
                <li className="flex-item" id="firstFlex">
                    <div className="websiteContainer" id="firstWebsiteContainer"> 
                        MONEY EXCHANGE
                        <div className="websiteImage" id="firstImage"></div>
                    </div>
                    <div className="websiteInfo" id="firstWebsiteInfo">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className="githubCode"> 
                            <a href="#">GITHUB</a>
                        </div>
                        <div className="demo">
                            <a href="#">DEMO</a>
                        </div>
                    </div>
                </li>
                <li className="flex-item" id="secondFlex">
                <div className="websiteContainer" id="secondWebsiteContainer"> 
                        BANK SCHEDULE
                        <div className="websiteImage" id="secondImage"></div>
                    </div>
                    <div className="websiteInfo" id="secondWebsiteInfo">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className="githubCode"> 
                            <a href="#">GITHUB</a>
                        </div>
                        <div className="demo">
                            <a href="#">DEMO</a>
                        </div>
                    </div>
                </li>
                <li className="flex-item" id="thirdFlex">
                <div className="websiteContainer" id="thirdWebsiteContainer"> 
                        MILLIONAIRE
                        <div className="websiteImage" id="thirdImage"></div>
                    </div>
                    <div className="websiteInfo" id="thirdWebsiteInfo">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className="githubCode"> 
                            <a href="#">GITHUB</a>
                        </div>
                        <div className="demo">
                            <a href="#">DEMO</a>
                        </div>
                    </div>
                </li>
                <li className="flex-item" id="thirdFlex">
                <div className="websiteContainer" id="thirdWebsiteContainer"> 
                        MILLIONAIRE
                        <div className="websiteImage" id="thirdImage"></div>
                    </div>
                    <div className="websiteInfo" id="thirdWebsiteInfo">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className="githubCode"> 
                            <a href="#">GITHUB</a>
                        </div>
                        <div className="demo">
                            <a href="#">DEMO</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
  }
}

export default Portfolio;