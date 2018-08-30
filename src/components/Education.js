import React, { Component } from 'react';
import $ from 'jquery';


import './Education.css';

class Education extends Component {
   
    render() {
      return (
        <div className="containerEducation">
          <h2 className="education">EDUCATION </h2>
            <ul className="flex-container">
                <li className="flex-item-education" id="firstEducationItem">
                    <div className="school">
                        <p>2018</p>
                        <h2>Thinkful Coding Bootcamp</h2>
                        <p> Full Stack Program</p>
                    </div>
                </li>
                <li className="flex-item-education" id="secondEducationItem">  
                <div className="school">
                        <p>2012</p>
                        <h2>University of Southern California</h2>
                        <p> Bachelor</p>
                    </div>
                </li>
            </ul>
        </div>
      );
    }
  }

export default Education;