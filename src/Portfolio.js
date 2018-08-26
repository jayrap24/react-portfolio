import React, { Component } from 'react';

import './Portfolio.css';

class Navigation extends Component {
  render() {
    return (
        <div className = "containerPortfolio">
        <h2 className="aboutMe">MY PROJECTS</h2>
            <ul className="flex-container">
                <li className="flex-item">1</li>
                <li className="flex-item">2</li>
                <li className="flex-item">3</li>
                <li className="flex-item">4</li>
                <li className="flex-item">5</li>
                <li className="flex-item">6</li>
            </ul>
        </div>
    );
  }
}

export default Navigation;