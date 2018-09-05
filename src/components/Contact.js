import React, { Component } from 'react';
import {Icon} from 'react-fa'
import './Contact.css';

class Contact extends Component {
  render() {
   
    

    return (
      <div className="containerContact" id="contactComponent">
      <h2 className="letsWorkTogether">LETS WORK TOGETHER</h2>
    
    
            <ul className="flex-container">
                <li className="flex-item-contact">
                    <div className="socialLogo">
                    <a href="https://github.com/jayrap24">
                    <Icon name="Example of github fa-github" id="githubLogo"/>
                    </a>
                    </div>
                </li>


                <li className="flex-item-contact">
                    <div className="socialLogo">
                    <a href="https://www.linkedin.com/in/jesperrapouw/">
                    <Icon name="Example of linkedin fa-linkedin" id="githubLogo"/>
                    </a>
                    </div>
                </li>

                 <li className="flex-item-contact">
                  <div className="socialLogo">
                  <a href="mailto:rapouw@gmail.com?Subject=Hello%20Jesper" target="_top">
                    <Icon name="Example of email fa-envelope" id="githubLogo"/>
                  </a>
                    </div>
                </li>
            </ul>   
      </div>
    );
  }
}

export default Contact;



    
                       
  