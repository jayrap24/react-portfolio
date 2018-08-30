import React, { Component } from 'react';
import {Icon} from 'react-fa'
import './Contact.css';

class Contact extends Component {
  render() {
   
    

    return (
      <div className="containerContact" id="Contact">
      <h2 className="letsWorkTogether">LETS WORK TOGETHER</h2>
    
    
            <ul className="flex-container">
                <li className="flex-item-contact">
                    <div className="socialLogo">
                    <Icon name="Example of github fa-github" id="githubLogo"/>
                    </div>
                </li>


                <li className="flex-item-contact">
                    <div className="socialLogo">
                    <Icon name="Example of linkedin fa-linkedin" id="githubLogo"/>
                    </div>
                </li>

                 <li className="flex-item-contact">
                  <div className="socialLogo">
                    <Icon name="Example of email fa-envelope" id="githubLogo"/>
                    </div>
                </li>
            </ul>   
      </div>
    );
  }
}

export default Contact;



    
                       
  